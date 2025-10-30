@echo off
cd /d D:\Cursor

echo ============================
echo    GIT COMMIT AUTOMATICO
echo ============================
echo.

git add Sites/
echo.
set /p msg=Mensagem do commit: 

git commit -m "%msg%"
git push

echo.
pause