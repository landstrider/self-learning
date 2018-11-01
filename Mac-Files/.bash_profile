PS1='\[\e[1;91m\][\u \w]\$\[\e[0m\] '
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
alias ls='ls -GFh'
alias del_swp="find . -name "*.swp" -print -exec rm -i '{}' \;"

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
export PATH=$PATH:/usr/local/Cellar/mongodb@3.4/3.4.14/bin/

export ANDROID_HOME=/Users/harshvardhan/Library/Android/sdk

export PATH=${PATH}:${ANDROID_HOME}/tools

export PATH=${PATH}:${ANDROID_HOME}/platform-tool

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
