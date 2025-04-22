#!/bin/bash

# Check if the script is being run inside a Git repository
if [ ! -d ".git" ]; then
  echo "This is not a Git repository! Please run this script inside your Git project folder."
  exit 1
fi

# Get the current directory (no need to change the path manually)
PROJECT_PATH=$(pwd)

# Get the current branch name (automatically uses the branch you're on)
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# If no commit message is provided, prompt the user
if [ -z "$1" ]; then
  echo "Please enter a commit message:"
  read msg
else
  msg=$1
fi

# Ask for the repository URL if not set (optional)
echo "Please enter the GitHub repository URL (or press Enter to use the existing one):"
read NEW_REPO_URL

# If the user provided a new repo URL, update the remote origin
if [ ! -z "$NEW_REPO_URL" ]; then
  git remote set-url origin $NEW_REPO_URL
  echo "Changed the repository to $NEW_REPO_URL"
else
  echo "Using the existing repository URL."
fi

# Add changes, commit, and push to the repo (using the current branch)
git add .
git commit -m "$msg"
git push origin $BRANCH_NAME

