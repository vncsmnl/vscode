import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromNotion } from '@/lib/notion-client'
import { getNotionPagesId } from '@/lib/vercel-edge-config'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Terminal',
}

export default async function General() {
  const { terminal_general } = await getNotionPagesId()
  const { content } = await getCodeBlockFromNotion(terminal_general)

  const highlighter = await shiki.getHighlighter({
    theme: 'dracula',
  })

  const code = highlighter.codeToHtml(content, { lang: 'md' })

  return <CodePreview code={code} />
}
