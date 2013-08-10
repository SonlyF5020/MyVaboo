#!/bin/sh
echo "this script is used to pull your code on git remote repo whatever changes you have made"
git stash
git pull --rebase
git stash pop
echo "----------PULL SUCCESS----------"
