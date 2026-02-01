
reset: .FORCE
	source ~/.zshrc && gem install jekyll bundler
	curl -sSL https://get.rvm.io | bash -s stable
	source ~/.rvm/scripts/rvm && rvm -v && rvm install 3.1.3 && source ~/.zshrc && rvm use 3.1.3 --default && ruby -v


.FORCE: