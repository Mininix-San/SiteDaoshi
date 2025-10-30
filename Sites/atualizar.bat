@echo off
cd /d D:\Cursor\Sites
git add .
set /p msg=Mensagem do commit: 
git commit -m "%msg%"
git push
pause
