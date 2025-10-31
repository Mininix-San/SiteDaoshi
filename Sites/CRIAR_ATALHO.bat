@echo off
chcp 65001 >nul

echo.
echo ╔═══════════════════════════════════════════════╗
echo ║                                               ║
echo ║      🎨 CRIAR ATALHOS NA ÁREA DE TRABALHO     ║
echo ║                                               ║
echo ╚═══════════════════════════════════════════════╝
echo.

set DESKTOP=%USERPROFILE%\Desktop

echo 📋 Criando atalhos...
echo.

REM Criar atalho para o dashboard
echo Set oWS = WScript.CreateObject("WScript.Shell") > CreateShortcut.vbs
echo sLinkFile = "%DESKTOP%\🎨 Dashboard Daoshi.lnk" >> CreateShortcut.vbs
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> CreateShortcut.vbs
echo oLink.TargetPath = "%CD%\dashboard.html" >> CreateShortcut.vbs
echo oLink.WorkingDirectory = "%CD%" >> CreateShortcut.vbs
echo oLink.Description = "Dashboard Admin - Daoshi Store" >> CreateShortcut.vbs
echo oLink.Save >> CreateShortcut.vbs

cscript //nologo CreateShortcut.vbs
del CreateShortcut.vbs

echo ✅ Atalho criado: 🎨 Dashboard Daoshi
echo.

REM Criar atalho para o servidor
echo Set oWS = WScript.CreateObject("WScript.Shell") > CreateShortcut.vbs
echo sLinkFile = "%DESKTOP%\🚀 Servidor Git.lnk" >> CreateShortcut.vbs
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> CreateShortcut.vbs
echo oLink.TargetPath = "%CD%\auto-start-git.vbs" >> CreateShortcut.vbs
echo oLink.WorkingDirectory = "%CD%" >> CreateShortcut.vbs
echo oLink.Description = "Iniciar Servidor Git em Segundo Plano" >> CreateShortcut.vbs
echo oLink.Save >> CreateShortcut.vbs

cscript //nologo CreateShortcut.vbs
del CreateShortcut.vbs

echo ✅ Atalho criado: 🚀 Servidor Git
echo.

REM Criar atalho para o site principal
echo Set oWS = WScript.CreateObject("WScript.Shell") > CreateShortcut.vbs
echo sLinkFile = "%DESKTOP%\🌟 Site Daoshi.lnk" >> CreateShortcut.vbs
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> CreateShortcut.vbs
echo oLink.TargetPath = "%CD%\index.html" >> CreateShortcut.vbs
echo oLink.WorkingDirectory = "%CD%" >> CreateShortcut.vbs
echo oLink.Description = "Site Principal - Daoshi Store" >> CreateShortcut.vbs
echo oLink.Save >> CreateShortcut.vbs

cscript //nologo CreateShortcut.vbs
del CreateShortcut.vbs

echo ✅ Atalho criado: 🌟 Site Daoshi
echo.

echo ╔═══════════════════════════════════════════════╗
echo ║                                               ║
echo ║         ✅ ATALHOS CRIADOS COM SUCESSO!       ║
echo ║                                               ║
echo ╚═══════════════════════════════════════════════╝
echo.
echo 🎉 Agora você tem 3 atalhos na área de trabalho:
echo.
echo    🎨 Dashboard Daoshi  - Abrir dashboard admin
echo    🚀 Servidor Git      - Iniciar servidor Git
echo    🌟 Site Daoshi       - Abrir site principal
echo.
pause

