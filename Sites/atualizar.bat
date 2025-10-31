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

REM Adicionar APENAS Sites/ e arquivos da raiz importantes
echo 📥 Adicionando arquivos do projeto...
git add Sites/
git add .gitignore 2>nul
git add index.html 2>nul
git add README.md 2>nul

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

REM Sincronizar com remoto primeiro
echo.
echo 🔄 Sincronizando com repositório remoto...
git pull --rebase

if errorlevel 1 (
    echo.
    echo ⚠️  Conflitos detectados ou erro ao fazer pull!
    echo 💡 Tentando novamente sem rebase...
    git rebase --abort 2>nul
    git pull --no-rebase
    
    if errorlevel 1 (
        echo.
        echo ❌ Erro ao sincronizar! Você pode ter conflitos para resolver.
        echo 💡 Execute manualmente: git pull
        echo.
        pause
        exit /b
    )
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