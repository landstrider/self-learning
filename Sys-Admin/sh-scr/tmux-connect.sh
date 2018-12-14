#!/bin/bash

cd $HOME/Moonraft/bdo-project
tmux new-session -d -s config
array=()
while IFS= read -r -p "Next item (end with an empty line): " line; do
    [[ $line ]] || break  # break if line is empty

    array+=("/home/harshvardhan/Moonraft/bdo-project/bdo-pob/src/$line")
done

#tmux new-window -t config:1 -n "vim-react" "vim ${array[@]}"
echo "${array[@]}"
#tmux new-window -t config:2 -n 'react-server'
#tmux new-window -t config:3 'express-server'
#tmux select-window -t config:1

#tmux -2 attach-session -t config

