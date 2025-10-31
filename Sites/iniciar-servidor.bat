@echo off
chcp 65001 >nul
cd /d D:\Cursor\Sites

echo.
echo ╔═══════════════════════════════════════════════╗
echo ║                                               ║
echo ║      🚀 INICIANDO SERVIDOR GIT 🚀            ║
echo ║                                               ║
echo ╚═══════════════════════════════════════════════╝
echo.
echo 📋 Verificando Node.js...

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ❌ Node.js não encontrado!
    echo.
    echo 📥 Por favor, instale o Node.js:
    echo    https://nodejs.org/
    echo.
    pause
    exit /b
)

echo ✅ Node.js instalado!
echo.
echo 🚀 Iniciando servidor na porta 3333...
echo.
echo ════════════════════════════════════════════════
echo.

REM Iniciar o servidor
node git-server.js

pause

