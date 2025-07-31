import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromGist } from '@/lib/gist-client'
import { getGistPagesId } from '@/lib/gist-config'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Gaming Setup',
}

export default async function GamingSetup() {
  const { setup_gaming } = await getGistPagesId()
  const { content } = await getCodeBlockFromGist(setup_gaming)

  const highlighter = await shiki.getHighlighter({
    theme: 'dracula',
  })

  const code = highlighter.codeToHtml(content, { lang: 'md' })

  return <CodePreview code={code} />
}
