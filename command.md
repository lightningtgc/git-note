```
git pull

git push

git status

gitfetch

```


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
