# sparsemaps.github.io

The provided instructions are meant for local Linux development.

## Bootstrap

Install Ruby:

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
# update dotfiles (bashrc or zshrc):
export GEM_HOME="$HOME/gems"
export PATH="$HOME/gems/bin:$PATH"
# local dependencies:
gem install jekyll bundler # sudo is not needed if dotfiles or current shell are setup correctly
```

Make sure Ruby is up to date or update to the required version:

```bash
# install RVM (might need to add GPG keys beforehand)
curl -sSL https://get.rvm.io | bash -s stable --auto-dotfiles
source ~/.rvm/scripts/rvm
rvm -v
# install ruby with higher version (or use "rvm reinstall" if the environment is broken):
rvm install 3.1.3
# fix path warnings:
vim ~/.zshrc
export PATH="$HOME/.rvm/bin:$PATH"
# apply changes:
source ~/.zshrc
# verify versions (source env in case zsh environment was not setup correctly):
source ~/.rvm/scripts/rvm && rvm use 3.1.3 --default
ruby -v
```

Install gems:
```bash
bundle install
# or if updating:
bundle update
```

Build and serve:
```bash
# to see pages and also drafts:
bundle exec jekyll serve --drafts
# example how to serve so that to access from local mobile or tablet:
bundle exec jekyll serve --host 0.0.0.0
```

Note, when modifying the `_config.yml`, it will not be re-generated automatically, the serving has to re-started.

TODO:
* [Manual build and deployment](https://chirpy.cotes.page/posts/getting-started/#manual-build-and-deployment)

### Performed Chirpy modifications

* Added mouse click "floating stars" script - through `_layouts/default.html`.
* Removed most of the post meta data: page description, any dates, author info, read time - through `_layouts/post.html`.
* Modified basic styling: defined visited link color, text selection color, underline feature (text can be underlined using `{: .underline}`) - through overrides at `assets/css/jekyll-theme-chirpy.scss`.
* Categories are simplified to single level - for now. Categories are removed from `_tabs`, they should not be used at all, ever.

## Original intro by Chirpy

[![Gem Version](https://img.shields.io/gem/v/jekyll-theme-chirpy)][gem]&nbsp;
[![GitHub license](https://img.shields.io/github/license/cotes2020/chirpy-starter.svg?color=blue)][mit]

When installing the [**Chirpy**][chirpy] theme through [RubyGems.org][gem], Jekyll can only read files in the folders
`_data`, `_layouts`, `_includes`, `_sass` and `assets`, as well as a small part of options of the `_config.yml` file
from the theme's gem. If you have ever installed this theme gem, you can use the command
`bundle info --path jekyll-theme-chirpy` to locate these files.

The Jekyll team claims that this is to leave the ball in the user’s court, but this also results in users not being
able to enjoy the out-of-the-box experience when using feature-rich themes.

To fully use all the features of **Chirpy**, you need to copy the other critical files from the theme's gem to your
Jekyll site. The following is a list of targets:

```shell
.
├── _config.yml
├── _plugins
├── _tabs
└── index.html
```

To save you time, and also in case you lose some files while copying, we extract those files/configurations of the
latest version of the **Chirpy** theme and the [CD][CD] workflow to here, so that you can start writing in minutes.

## Usage

Check out the [theme's docs](https://github.com/cotes2020/jekyll-theme-chirpy/wiki).

## License

This work is published under [MIT][mit] License.

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[CD]: https://en.wikipedia.org/wiki/Continuous_deployment
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE