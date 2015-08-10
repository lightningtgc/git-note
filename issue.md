### Git Pull Error: 

**insufficient permission for adding an object to repository database .git/objects**

解决方案：

通过终端返回到项目根目录,接着敲：
```
cd .git/objects
ls -al
// 通过上面找到你的用户名与群组，再更换下面的命令
sudo chown -R yourname:yourgroup *
```

### Git配置全局ignore规则

> 实现自动忽略相应文件

首先到达根目录下进行操作
```
cd ~
```
写上你要忽略的文件，文件夹之类的规则
```
vi .gitignore
```
再与git全局配置文件进行匹配的关联
```
vi .gitconfig
```
打开.gitconfig输入:
```
[core]
    excludesfile = ~/.gitignore
```
注： 如已有`[core]`，直接在其底下写excludesfile的规则即可
    另外一些配置内容也可以直接在.gitconfig里面修改
