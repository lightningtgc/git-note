### Git Pull Error: 

#### insufficient permission for adding an object to repository database .git/objects

解决方案：

通过终端到项目根目录,接着敲
```
cd .git/objects
ls -al
// 通过上面找到你的用户名与群组，再更换下面的命令
sudo chown -R yourname:yourgroup *
```

