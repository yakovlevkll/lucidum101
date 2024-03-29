#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# sudo chmod 777 -R dist

cd dist

git init
git add -A
git commit -m 'Deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yakovlevkll/lucidum101.git master:gh-pages

cd -