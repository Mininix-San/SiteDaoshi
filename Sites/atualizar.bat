@echo off
chcp 65001 >nul
cd /d D:\Cursor

echo.
echo ╔═══════════════════════════════════════════════╗
echo ║                                               ║
echo ║     🚀 GIT COMMIT AUTOMÁTICO - SITES 🚀      ║
echo ║                                               ║
echo ╚═══════════════════════════════════════════════╝
echo.
echo 📂 Pasta: D:\Cursor\Sites
echo.

REM Verificar status atual
echo 🔍 Verificando arquivos modificados...
echo.
git status Sites/
echo.
echo ════════════════════════════════════════════════
echo.

REM Adicionar TODOS os arquivos (novos, modificados e removidos)
echo 📥 Adicionando TODOS os arquivos de Sites/...
git add Sites/* 
git add Sites/
git add -A Sites/

REM Verificar o que será commitado
echo.
echo ✅ Arquivos que serão enviados:
echo.
git status --short Sites/
echo.
echo ════════════════════════════════════════════════
echo.

REM Confirmar antes de continuar
set /p confirm=⚠️  Deseja continuar? (S/N): 
if /i not "%confirm%"=="S" (
    echo.
    echo ❌ Operação cancelada pelo usuário.
    echo.
    pause
    exit /b
)

echo.
set /p msg=💬 Mensagem do commit: 

REM Fazer commit
echo.
echo 📝 Criando commit...
git commit -m "%msg%"

if errorlevel 1 (
    echo.
    echo ⚠️  Nenhuma alteração para commitar ou erro no commit.
    echo.
    pause
    exit /b
)

REM Fazer push
echo.
echo 🚀 Enviando para o repositório remoto...
git push

if errorlevel 1 (
    echo.
    echo ❌ Erro ao fazer push! Verifique sua conexão e permissões.
    echo.
    pause
    exit /b
)

echo.
echo ╔═══════════════════════════════════════════════╗
echo ║                                               ║
echo ║        ✅ ATUALIZAÇÃO CONCLUÍDA! ✅           ║
echo ║                                               ║
echo ╚═══════════════════════════════════════════════╝
echo.
echo 🎉 Todos os arquivos foram enviados com sucesso!
echo.
pause