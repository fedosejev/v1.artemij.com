#!/bin/bash

git add .
git commit -m "Update"
git push -u origin master
git subtree push --prefix build origin gh-pages