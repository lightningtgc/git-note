# Git 命令大全

讲解常用Git命令与注解

## Git配置命令
```
git config
```

###  Git配置别名
```
git config --global alias.缩写 全名

//举例
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
```

*直接在文件中写入Git别名：*
```
1)
vi ~/.gitconfig

2）在文件中写入:
[alias]
    st = status
    ci = commit
    co = checkout
    br = branch
    mg = merge
    unstage = reset HEAD --
    last = log -1 HEAD
```

### 配置 commit 的用户和邮箱
```
git config user.name "xx"               #设置 commit 的用户
git config user.email.com "xx@xx.com"   #设置 commit 的邮箱
git config format.pretty oneline        #显示历史记录时，每个提交的信息只显示一行
```

## git文件操作

### [增加文件 git-add](https://git-scm.com/docs/git-add)
```
git add <file>  # 增加某个文件
git add .       # 增加全部修改文件
```

### 删除文件
```
git rm <file>           #直接删除文件
git rm --cached <file>  #删除文件暂存状态
```

### 储藏和恢复
```
git stash           #储藏当前工作
git stash list      #查看储藏的工作现场
git stash apply     #恢复工作现场，stash内容并不删除
git stash pop       #恢复工作现场，并删除stash内容
```

### 更新代码

拉取远程库的代码到本地库
```
git fetch
```

更新本地代码
```
git pull
```
git pull 相当于 git fetch + git merge

### 提交代码
```
git push
```
#### 提交到远端仓库：
```
git push origin master
```

master可换成你想要的server名

可直接配置
> git config --global remote.origin.push refs/heads/*:refs/for/*

### 显示当前状态，包括当前所在分支，commit情况
```
git status
```

```
git fetch
```

## 纠错

### Blame

```
git blame
```
针对某个文件blame

## 分支相关

### 查看分支

查看本地分支
```
git branch
```

查看远程全部分支
```
git branch -a
```
### 获取分支

```
git clone <branchURL>
```

获取远程tag
```
git fetch origin tag <tagName>
```

### 删除分支

删除本地分支
```
git branch -d 本地分支名
```

删除远程分支：

v1.7.0以后
```
git push origin --delete <branchName>
```

删除远程tag
```
git push origin --delete tag <tagname>
```

### 更新远程分支信息

同步远程分支信息
```
git fetch -p
```
-p就是修剪的意思。它在fetch之后删除掉没有与远程分支对应的本地分支，并且同步一些远程新创建的分支和tag。


### 合并分支
```
//--no-ff 保留原节点记录，防止丢失节点记录信息
// ff: fast-forward
git merge --no-ff 分支名
// rebase 不生成新的合并节点，节点呈线性
git rebase 分支名
```
预感冲突较多时，应采用git merge来处理

### 查看单个文件的修改历史

```
git log 文件路径/文件名

// 以单行形式展示，效果比较直观
git log --pretty=oneline 文件路径/文件名
```
注：文件路径是相对位置，基于当前路径来看的。

找到想看的的历史版本号,展示出修改的地方
```
git show 版本号
```
应用：相当于对blame的一个外层补充。

### 回滚单个文件到指定版本

```
git reset 版本号 文件路径/文件名
```
之后再 git commit 和 git push

### 如果还没有克隆现有仓库，想将仓库连接到某个远程服务器，可用：
```
git remote add origin <server>
```
### 查看当前Git 地址：
```
 git remote -v
```

### 清除git上文件修改

[git clean](http://git-scm.com/docs/git-clean)

```
git clean -df

git clean -di
```

**-d** 清除未提交的文件夹与文件，一般结合f或i进行强制清除

**-f** 强制清除

**-i** 有交互性的选择操作

## 历史管理

### 查看历史
```
git log --pretty=oneline filename #一行显示
git log -p -2      #显示最近2次提交内容的差异
git show cb926e7   #查看某次修改
```

### 版本回退
```
git reset --hard HEAD^    #回退到上一个版本
git reset --hard cb926e7  #回退到具体某个版
git reflog                #查看命令历史,常用于帮助找回丢失掉的commit
```
用HEAD表示当前版本，上一个版本就是HEAD^，上上一个版本就是HEAD^^，HEAD~100就是上100个版本。

### 版本回退
```
git reset --hard HEAD^    #回退到上一个版本
git reset --hard cb926e7  #回退到具体某个版
git reflog                #查看命令历史,常用于帮助找回丢失掉的commit
```
用HEAD表示当前版本，上一个版本就是HEAD^，上上一个版本就是HEAD^^，HEAD~100就是上100个版本。

###管理修改
```
git status              #查看工作区、暂存区的状态
git checkout -- <file>  #丢弃工作区上某个文件的修改
git reset HEAD <file>   #丢弃暂存区上某个文件的修改，重新放回工作区
```

### 查看差异
```
git diff              #查看未暂存的文件更新 
git diff --cached     #查看已暂存文件的更新 
git diff HEAD -- readme.txt  #查看工作区和版本库里面最新版本的区别
git diff <source_branch> <target_branch>  #在合并改动之前，预览两个分支的差异
```
使用内建的图形化git：gitk，可以更方便清晰地查看差异。当然 Github 客户端也不错。

## 标签 - tag

### 显示标签
```
git tag         #列出现有标签 
git show <tagname>  #显示标签信息
```
### 创建标签
```
git tag v0.1    #新建标签，默认位 HEAD
git tag v0.1 cb926e7  #对指定的 commit id 打标签
git tag -a v0.1 -m 'version 0.1 released'   #新建带注释标签
```

###操作标签
```
git checkout <tagname>        #切换到标签

git push origin <tagname>     #推送分支到源上
git push origin --tags        #一次性推送全部尚未推送到远程的本地标签

git tag -d <tagname>          #删除标签
git push origin :refs/tags/<tagname>      #删除远程标签
```

## Git 高级技巧

### 切换到最后所在分支

切换开发跟本地分支之类的
```
git checkout -
```

注：cd命令有个类似的缩写*cd -*

### Blame

```
git blame -w  # 忽略移除空白这类改动
git blame -M  # 忽略移动文本内容这类改动
git blame -C  # 忽略移动文本内容到其它文件这类改动
```

### 子模块 vs 子树


### Big Picture

git-big-picture可以将git仓库的分支和标签之间的衍生关系以图片的形式展示出来，对于直观上了解代码的历史很有帮助。
```
git big-picture -o pic.png
```

默认显示所有的分支，标签和首次提交，所以看上去很乱，可以通过如下选项只显示标签之间的关系（部分）
```
git big-picture --no-branches --no-roots -o pic.png
```
