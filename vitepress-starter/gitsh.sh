#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提示用户输入提交信息
echo "请输入提交信息："
read COMMIT_MSG

# 检查是否输入了提交信息
if [ -z "$COMMIT_MSG" ]; then
  echo "提交信息不能为空！"
  exit 1
fi

git add .

# 使用用户输入的提交信息
git commit -m "$COMMIT_MSG"

# 推送到远程仓库的 gh-pages 分支
git push 
