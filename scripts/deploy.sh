#!/bin/bash

# scp <PATH_FILE> ${REMOTE_USER}@s{REMOTE_HOST}:${REMOTE_PATH}

COMMAND="cd ${REMOTE_PATH} && git pull"

ssh -o StrictHostKeyCheking=no -i deploy-travis -vp ${REMOTE_PORT} ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}