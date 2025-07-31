# 🔧 Migração @next/font → next/font

## Arquivos que precisam ser atualizados:

### 1. src/app/layout.tsx
```tsx
// ANTES:
import { Inter } from '@next/font/google'

// DEPOIS:
import { Inter } from 'next/font/google'
```

### 2. src/components/CodePreview.tsx  
```tsx
// ANTES:
import { JetBrains_Mono } from "@next/font/google"

// DEPOIS:
import { JetBrains_Mono } from "next/font/google"
```

### 3. next.config.js
```js
// ANTES:
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

// DEPOIS:
const nextConfig = {
  // appDir não é mais experimental no Next.js 14
}
```

## ⚠️ Notas Importantes:

1. **@next/font foi depreciado** no Next.js 13.2+ 
2. **next/font** é o novo padrão
3. **Funcionalidade idêntica** - apenas mudança de import
4. **Zero breaking changes** no comportamento

## 🔄 Comando de Migração:

```bash
# 1. Remover dependência antiga
pnpm remove @next/font

# 2. A nova funcionalidade já vem com Next.js
# (next/font faz parte do core do Next.js)
```

## ✅ Validação:

Após a migração, verificar:
- [ ] Fonts carregam corretamente
- [ ] CSS é gerado
- [ ] Performance mantida
- [ ] Hydration sem erros
