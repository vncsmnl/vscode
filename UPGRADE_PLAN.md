# 🚀 Plano de Atualização - VS Code Settings Project

## 📊 Estado Atual vs Versões Mais Recentes

| Dependência | Versão Atual | Versão Mais Recente | Prioridade | Risco |
|-------------|--------------|---------------------|------------|-------|
| next | 13.1.7-canary.7 | 15.4.5 | 🔴 Alta | 🟠 Médio |
| react + react-dom | 18.2.0 | 19.1.1 | 🔴 Alta | 🔴 Alto |
| @next/font | 13.1.6 | DEPRECIADO | 🔴 Alta | 🟢 Baixo |
| typescript | 4.9.5 | 5.8.3 | 🟡 Média | 🟠 Médio |
| @types/react | 18.0.27 | 19.1.9 | 🟡 Média | 🟠 Médio |
| @types/node | 18.13.0 | 24.1.0 | 🟡 Média | 🟢 Baixo |
| tailwindcss | 3.4.17 | 4.1.11 | 🟡 Média | 🔴 Alto |
| shiki | 0.14.7 | 3.9.0 | 🟡 Média | 🔴 Alto |
| lucide-react | 0.112.0 | 0.535.0 | 🟢 Baixa | 🟢 Baixo |

## 🎯 Estratégia de Atualização (5 Fases)

### **FASE 1: Preparação e Backup** ⏱️ 30min
- [ ] Criar branch `upgrade/dependencies`
- [ ] Backup completo do projeto
- [ ] Testar build atual
- [ ] Documentar funcionalidades críticas

### **FASE 2: Migrações Críticas** ⏱️ 1-2h
- [ ] Migrar `@next/font` → `next/font`
- [ ] Atualizar Next.js 13.1.7 → 14.2.15 (LTS)
- [ ] Ajustar configurações experimentais
- [ ] Testar funcionalidade básica

### **FASE 3: React e TypeScript** ⏱️ 1-2h
- [ ] Atualizar TypeScript 4.9.5 → 5.8.3
- [ ] Atualizar @types/* para compatibilidade
- [ ] Resolver conflitos de tipos
- [ ] Testar compilação

### **FASE 4: Dependências de UI** ⏱️ 1h
- [ ] Atualizar lucide-react (baixo risco)
- [ ] Testar ícones e componentes
- [ ] Verificar Radix UI (compatibilidade)

### **FASE 5: Grandes Mudanças** ⏱️ 2-3h
- [ ] Avaliar Shiki v3.9.0 (BREAKING CHANGES)
- [ ] Avaliar TailwindCSS v4 (BREAKING CHANGES)
- [ ] Considerar React 19 (aguardar estabilidade)

## 🔧 Comandos de Execução

### Fase 1: Preparação
```bash
# Backup e branch
git checkout -b upgrade/dependencies
git add . && git commit -m "📦 Backup before upgrade"

# Testar build atual
pnpm build
pnpm start
```

### Fase 2: Migrações Críticas
```bash
# Migrar @next/font
pnpm remove @next/font
# Código já será atualizado automaticamente

# Atualizar Next.js para versão estável
pnpm add next@14.2.15 eslint-config-next@14.2.15

# Testar
pnpm dev
```

### Fase 3: TypeScript
```bash
# Atualizar TypeScript e tipos
pnpm add -D typescript@5.8.3
pnpm add -D @types/node@24.1.0 @types/react@18.0.27 @types/react-dom@18.0.10

# Verificar erros
pnpm tsc --noEmit
```

### Fase 4: UI Dependencies
```bash
# Atualizar dependências de UI
pnpm add lucide-react@latest
pnpm add @radix-ui/react-collapsible@latest @radix-ui/react-dropdown-menu@latest @radix-ui/react-scroll-area@latest
```

## ⚠️ Pontos de Atenção

### 🔴 BREAKING CHANGES Confirmados
1. **Shiki 0.14.7 → 3.9.0**: API completamente reescrita
2. **TailwindCSS 3.x → 4.x**: Sintaxe e configuração mudaram
3. **React 18 → 19**: Mudanças no comportamento de hooks

### 🛡️ Estratégias de Segurança
1. **Testar após cada fase**
2. **Manter versões intermediárias estáveis**
3. **Documentar todos os problemas encontrados**
4. **Rollback plan definido**

## 📝 Checklist de Teste

Após cada fase, verificar:
- [ ] `pnpm dev` funciona
- [ ] `pnpm build` funciona  
- [ ] `pnpm start` funciona
- [ ] Páginas carregam corretamente
- [ ] Fontes são aplicadas
- [ ] Syntax highlighting funciona
- [ ] Ícones são exibidos
- [ ] Componentes interativos funcionam
- [ ] Responsive design mantido

## 🔄 Rollback Plan

Se algo quebrar:
```bash
git checkout main
git branch -D upgrade/dependencies
# Restaurar do backup
```

## 📅 Cronograma Recomendado

- **Dia 1**: Fases 1-2 (2-3h)
- **Dia 2**: Fase 3 (1-2h) 
- **Dia 3**: Fase 4 (1h)
- **Dia 4**: Teste intensivo
- **Futuro**: Fase 5 (quando necessário)

## 🎯 Meta Final

Atingir um estado estável com:
- Next.js 14.x (LTS)
- React 18.x (estável)
- TypeScript 5.x (atual)
- Dependências atualizadas sem breaking changes

**Resultado esperado**: Projeto moderno, seguro e mantível! 🚀
