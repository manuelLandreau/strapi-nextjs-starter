#!/bin/bash
cd client
mv ../strapi-app/public/upload /tmp/
rm -rf ../strapi-app/public/*
mv /tmp/upload ../strapi-app/public/
./node_modules/.bin/next build
./node_modules/.bin/next export
cp -r ./out/* ../strapi-app/public
rm -r ./out/
rm -r ./.next/
echo "App build and deploy succesfuly in /public"