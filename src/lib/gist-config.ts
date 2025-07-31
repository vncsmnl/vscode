import { z } from 'zod'

// Esquema de validação para os Gist IDs
const gistPagesIdStore = z.object({
    terminal_general: z.string(),
    terminal_fish: z.string(),
    setup_dev: z.string(),
    setup_gaming: z.string(),
})

// Configuração dos Gist IDs (substitui o Edge Config)
const gistIds = {
    terminal_general: process.env.GIST_TERMINAL_GENERAL || 'fallback-gist-id-1',
    terminal_fish: process.env.GIST_TERMINAL_FISH || 'fallback-gist-id-2',
    setup_dev: process.env.GIST_SETUP_DEV || 'fallback-gist-id-3',
    setup_gaming: process.env.GIST_SETUP_GAMING || 'fallback-gist-id-4',
}

export async function getGistPagesId() {
    try {
        return gistPagesIdStore.parse(gistIds)
    } catch (error) {
        console.warn('⚠️ Gist IDs validation error, using fallback data:', error)
        return {
            terminal_general: 'fallback-gist-id-1',
            terminal_fish: 'fallback-gist-id-2',
            setup_dev: 'fallback-gist-id-3',
            setup_gaming: 'fallback-gist-id-4',
        }
    }
}
