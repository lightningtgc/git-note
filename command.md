### Git配置 
```
git config
```

### 更新代码
```
git fetch
```
拉取远程库的代码到本地库

```
git pull
//相当于 git fetch + git merge; 
```


### 提交代码
```
git push
```
### 提交到远端仓库：
```
git push origin master
```

master可换成你想要的server名


### 显示当前状态，包括当前所在分支，commit情况
```
git status
```

```
git fetch
```

### 合并分支
```
//--no-ff生成节点记录，防止丢失记录信息
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

**-d** 清除未提交的文件夹与文件，一般结合fi或i进行强制清除

**-f** 强制清除

**-i** 有选择交互性的操作

### 查看提交记录
```
git log
```

