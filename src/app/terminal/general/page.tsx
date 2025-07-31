import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromGist } from '@/lib/gist-client'
import { getGistPagesId } from '@/lib/gist-config'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Terminal',
}

export default async function General() {
  const { terminal_general } = await getGistPagesId()
  const { content } = await getCodeBlockFromGist(terminal_general)

  const highlighter = await shiki.getHighlighter({
    theme: 'dracula',
  })

  const code = highlighter.codeToHtml(content, { lang: 'md' })

  return <CodePreview code={code} />
}
