import { z } from 'zod'

// Schema para validar resposta da API do GitHub Gist
const gistResponseSchema = z.object({
    files: z.record(z.object({
        content: z.string()
    }))
})

export async function getCodeBlockFromGist(gistId: string): Promise<{ content: string }> {
    // Retorna conteúdo fallback se não há token do GitHub
    if (!process.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN === 'test') {
        console.warn('⚠️ GITHUB_TOKEN not configured, using fallback content')
        return {
            content: `# Fallback Content\n\nConfigure GITHUB_TOKEN environment variable to fetch real content.\n\nGist ID: ${gistId}`
        }
    }

    // Se é um ID de fallback, retorna conteúdo de exemplo
    if (gistId.startsWith('fallback-')) {
        console.warn('⚠️ Using fallback Gist ID, returning sample content')
        return {
            content: `# Sample Content\n\nThis is sample content for ${gistId}.\n\nConfigure proper Gist IDs to fetch real content.`
        }
    }

    try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`, {
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'fala-dev-app'
            }
        })

        if (!response.ok) {
            throw new Error(`GitHub API responded with status: ${response.status}`)
        }

        const data = await response.json()
        const validatedData = gistResponseSchema.parse(data)

        // Pega o primeiro arquivo do gist
        const files = Object.values(validatedData.files)
        if (files.length === 0) {
            throw new Error('No files found in gist')
        }

        return { content: files[0].content }

    } catch (error) {
        console.warn('⚠️ GitHub Gist API error, using fallback content:', error)
        return {
            content: `# Error Loading Content\n\nFailed to fetch content from GitHub Gist.\n\nGist ID: ${gistId}\nError: ${error}`
        }
    }
}
