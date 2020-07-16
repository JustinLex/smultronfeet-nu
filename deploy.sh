#!/usr/bin/env bash

podman run -it --rm -v ./:/usr/src/app:Z -w /usr/src/app node npm install
podman run -it --rm -v ./:/usr/src/app:Z -w /usr/src/app node npm run build

rm -rf /var/www/smultronfeet.nu
cp -a build /var/www/smultronfeet.nu --no-preserve=all
chown -R nginx:nginx /var/www/smultronfeet.nu