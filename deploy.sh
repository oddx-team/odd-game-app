ssh root@34.87.148.195 <<EOF
    cd /home/oddx/odd-game-app
    git checkout .
    git pull origin master
    yarn
    yarn build
    exit
EOF
