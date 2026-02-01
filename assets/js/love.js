!function(event, canvas, a)
{
    function run_all()
    {
        create_doc_element("\
            .star {\
                width: 20px; \
                height: 20px; \
                position: fixed; \
                background: #ff0000; \
                transform: rotate(10deg);-webkit-transform: rotate(10deg); -moz-transform: rotate(10deg); \
                clip-path: polygon(\
                    50% 0%, \
                    61% 35%, \
                    98% 35%, \
                    68% 57%, \
                    79% 91%, \
                    50% 70%, \
                    21% 91%, \
                    32% 57%, \
                    2% 35%, \
                    39% 35%\
                ); \
                -webkit-clip-path: polygon(\
                    50% 0%, \
                    61% 35%, \
                    98% 35%, \
                    68% 57%, \
                    79% 91%, \
                    50% 70%, \
                    21% 91%, \
                    32% 57%, \
                    2% 35%, \
                    39% 35%\
                ); \
            }\
            "),
        onclick_new(),
        animate()
    }

    function animate()
    {
        for(var i = 0; i < div_data.length; i++)
            div_data[i].alpha <= 0 ? 
                (canvas.body.removeChild(div_data[i].el), div_data.splice(i,1)) : 
                (
                    div_data[i].y--, 
                    div_data[i].x += div_data[i].x_rate * div_data[i].x_direction,
                    div_data[i].scale += .005, 
                    div_data[i].alpha -= .013, 
                    div_data[i].rotation += div_data[i].rotation_dir * div_data[i].rotation_rate,
                    div_data[i].el.style.cssText = 
                        "left:"+div_data[i].x + "px;\
                        top:"+div_data[i].y+"px;\
                        opacity:"+div_data[i].alpha+";\
                        transform:scale("+div_data[i].scale+","+div_data[i].scale+") \
                        rotate("+div_data[i].rotation+"deg); \
                        background:"+div_data[i].color+"; \
                        z-index:99999"
                );
        
        requestAnimationFrame(animate)
    }
    
    function onclick_new()
    {
        var t = "function" == typeof event.onclick && event.onclick;
        event.onclick = function(event)
        {
            t&&t(), new_element(event)
        }
    }
    
    function new_element(event)
    {
        var div_el = canvas.createElement("div");
        div_el.className="star", div_data.push(
            {
                el: div_el,
                
                x: event.clientX-10,
                x_direction: Math.random() < 0.5 ? 1 : -1,
                x_rate: Math.random() * 0.6,

                y: event.clientY-15,
                
                scale:1,
                alpha:1, 
                
                rotation: 10,
                rotation_dir: Math.random() < 0.5 ? 1 : -1,
                rotation_rate: Math.random() * (1.0 - 0.4) + 0.4,
                
                color:get_color()
            }
        ), canvas.body.appendChild(div_el)
    }
    
    function create_doc_element(desc)
    {
        var doc_element = canvas.createElement("style");
        doc_element.type="text/css";
        try
        {
            doc_element.appendChild(canvas.createTextNode(desc))
        }
        catch(t)
        {
            doc_element.styleSheet.cssText=desc
        }
        canvas.getElementsByTagName("head")[0].appendChild(doc_element)
    }

    function get_color()
    {
        const base = 160; // Base brightness, adjust to control pastel intensity (200-255)
        const variance = 95; // Random variance to add (0-55 ensures values stay pastel)

        return "rgb(" +
            (base + ~~(variance * Math.random())) + "," +
            (base + ~~(variance * Math.random())) + "," +
            (base + ~~(variance * Math.random())) + ")";
    }

    var div_data = [];
    event.requestAnimationFrame = function()
    {
        return event.requestAnimationFrame || 
            event.webkitRequestAnimationFrame || 
            event.mozRequestAnimationFrame || 
            event.oRequestAnimationFrame || 
            event.msRequestAnimationFrame ||
            function(event) {setTimeout(event,1e3/60)}
    }(), 
    run_all()
}

(window,document);