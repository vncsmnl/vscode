import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromGist } from '@/lib/gist-client'
import { getGistPagesId } from '@/lib/gist-config'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Fish',
}

export default async function Fish() {
  const { terminal_fish } = await getGistPagesId()
  const { content } = await getCodeBlockFromGist(terminal_fish)

  const highlighter = await shiki.getHighlighter({
    theme: 'dracula',
  })

  const code = highlighter.codeToHtml(content, { lang: 'fish' })

  return <CodePreview code={code} />
}