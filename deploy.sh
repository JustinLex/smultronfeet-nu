#!/usr/bin/env bash

podman run -it --rm -v ./:/usr/src/app:Z -w /usr/src/app node 'npm install && npm run build'

rm -rf /var/www/smultronfeet.nu
cp -a public /var/www/smultronfeet.nu