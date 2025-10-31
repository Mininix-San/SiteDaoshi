@echo off
REM ════════════════════════════════════════════════════════════
REM  🚀 LAUNCHER DO SERVIDOR GIT (Execução Silenciosa)
REM ════════════════════════════════════════════════════════════

cd /d D:\Cursor\Sites

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if errorlevel 1 (
    echo Node.js nao instalado! Instale: https://nodejs.org/
    exit /b 1
)

REM Iniciar servidor em segundo plano (sem janela visível)
start /B node git-server.js

REM Aguardar servidor iniciar
timeout /t 2 /nobreak >nul

echo Servidor iniciado em segundo plano!
exit

