@echo off
cd /d D:\Cursor\Sites

echo ============================
echo    GIT COMMIT AUTOMATICO
echo ============================
echo.

git add .
echo.
set /p msg=Mensagem do commit: 

git commit -m "%msg%"
git push

echo.
pause