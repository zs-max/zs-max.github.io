# jenkins基本使用






























## window家庭版不能打开本地策略，解决方案
:::tip
- 1.在桌面创建一个文本文件  aaa.txt
- 2.编辑文本,填充代码
```javascript
@echo off
pushd "%~dp0"
dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum >List.txt
dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum >>List.txt
for /f %%i in ('findstr /i . List.txt 2^>nul') do dism /online /norestart /add-package:"C:\Windows\servicing\Packages\%%i"
pause
```
:::
- 修改后缀名 .txt -> .cmd
- 4.以管理员权限运行
- 5.等待安装
- 6.win+r 打开运行，输入gpedit.msc即可运行





