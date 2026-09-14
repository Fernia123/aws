#!/bin/bash
cd /home/ec2-user/app
pkill -f "node app.js" || true
nohup node app.js > app.log 2>&1 &