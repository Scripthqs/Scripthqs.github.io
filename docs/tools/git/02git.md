# git的提交步骤

## 1、git的工作区域

git有3个工作区域：

1. 工作区(Working Directory)：添加、编辑、修改文件等动作。

2. 暂存区：暂存已经修改的文件，最后统一提交到Git仓库中。

3. 版本库(git Repository)：最终确定的文件保存到仓库，成为一个新的版本，对他人可见。

## 2、Git的基本使用

- `git init` 初始化仓库，一个项目只需要做一次

- `git status` 查看当前状态
- `git add xx` 将xx文件提交到暂存区
- `git add .` 使用`.`时，代表将当前文件夹下的所有文件提交到暂存区
- `git commit -m 描述` 提交到仓库，每次提交一定要写描述
- `git log` 查看提交状态，每一次提交都会有一个唯一的提交ID
