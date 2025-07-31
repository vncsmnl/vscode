# 🚀 Script de Atualização Automática
# Executa as fases de atualização de forma segura

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("1", "2", "3", "4", "all")]
    [string]$Phase = "1"
)

$ErrorActionPreference = "Stop"

function Write-Phase {
    param($Message)
    Write-Host "`n🎯 $Message" -ForegroundColor Cyan
    Write-Host "=" * 50 -ForegroundColor Gray
}

function Test-Build {
    Write-Host "`n🔍 Testando build..." -ForegroundColor Yellow
    try {
        pnpm build
        Write-Host "✅ Build successful!" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "❌ Build failed!" -ForegroundColor Red
        return $false
    }
}

function Backup-Code {
    Write-Host "`n💾 Criando backup..." -ForegroundColor Yellow
    git add .
    git commit -m "📦 Backup before upgrade phase $Phase"
    Write-Host "✅ Backup criado!" -ForegroundColor Green
}

# FASE 1: Preparação
if ($Phase -eq "1" -or $Phase -eq "all") {
    Write-Phase "FASE 1: Preparação e Backup"
    
    # Testar build atual
    if (-not (Test-Build)) {
        Write-Host "❌ Build atual falhando. Corrija antes de prosseguir!" -ForegroundColor Red
        exit 1
    }
    
    # Criar backup
    Backup-Code
    
    Write-Host "`n✅ FASE 1 concluída!" -ForegroundColor Green
}

# FASE 2: Migrações Críticas  
if ($Phase -eq "2" -or $Phase -eq "all") {
    Write-Phase "FASE 2: Migrações Críticas (@next/font → next/font)"
    
    # Backup antes da fase
    Backup-Code
    
    # Remover @next/font (depreciado)
    Write-Host "🗑️ Removendo @next/font..." -ForegroundColor Yellow
    pnpm remove "@next/font"
    
    # Atualizar Next.js para versão estável
    Write-Host "📦 Atualizando Next.js..." -ForegroundColor Yellow
    pnpm add "next@14.2.15" "eslint-config-next@14.2.15"
    
    # Atualizar imports nos arquivos
    Write-Host "🔧 Atualizando imports..." -ForegroundColor Yellow
    
    # Testar após mudanças
    if (-not (Test-Build)) {
        Write-Host "❌ FASE 2 falhou! Execute rollback." -ForegroundColor Red
        exit 1
    }
    
    Write-Host "`n✅ FASE 2 concluída!" -ForegroundColor Green
}

# FASE 3: TypeScript
if ($Phase -eq "3" -or $Phase -eq "all") {
    Write-Phase "FASE 3: Atualização do TypeScript"
    
    Backup-Code
    
    Write-Host "📦 Atualizando TypeScript..." -ForegroundColor Yellow
    pnpm add -D "typescript@5.8.3"
    pnpm add -D "@types/node@24.1.0"
    
    # Testar compilação TypeScript
    Write-Host "🔍 Testando compilação TypeScript..." -ForegroundColor Yellow
    npx tsc --noEmit
    
    if (-not (Test-Build)) {
        Write-Host "❌ FASE 3 falhou! Execute rollback." -ForegroundColor Red
        exit 1
    }
    
    Write-Host "`n✅ FASE 3 concluída!" -ForegroundColor Green
}

# FASE 4: UI Dependencies
if ($Phase -eq "4" -or $Phase -eq "all") {
    Write-Phase "FASE 4: Dependências de UI"
    
    Backup-Code
    
    Write-Host "📦 Atualizando dependências de UI..." -ForegroundColor Yellow
    pnpm add "lucide-react@latest"
    pnpm add "@radix-ui/react-collapsible@latest" "@radix-ui/react-dropdown-menu@latest" "@radix-ui/react-scroll-area@latest"
    
    if (-not (Test-Build)) {
        Write-Host "❌ FASE 4 falhou! Execute rollback." -ForegroundColor Red
        exit 1
    }
    
    Write-Host "`n✅ FASE 4 concluída!" -ForegroundColor Green
}

Write-Host "`n🎉 Atualização concluída com sucesso!" -ForegroundColor Green
Write-Host "📋 Execute 'pnpm dev' para testar a aplicação." -ForegroundColor Cyan
