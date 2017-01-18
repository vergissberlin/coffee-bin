#!/bin/bash

# Coffee counter
#
# LICENSE:    MIT
#
# @project    coffee
# @package    deployment
# @author     André Lademann <vergissberlin@googlemail.com>

# 1. Update repository
cd /data/raspberry-coffee &&\
git checkout docker &&\
git pull &&\

# 2. Create backup
cat /data/app/node-red/flows.json > /data/backup/node-red/flows_backup.json &&\

# 3. Copy flow file
cat /data/raspberry-coffee/app/node-red/flows.json > /data/node-red/flows.json &&\

# 4. Restart container
init 6
