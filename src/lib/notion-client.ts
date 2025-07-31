import { Client, isFullBlock } from '@notionhq/client'
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

// Create client only if API key is provided
export const notionClient = process.env.NOTION_API_KEY
  ? new Client({ auth: process.env.NOTION_API_KEY })
  : null

export async function getCodeBlockFromNotion(pageId: string) {
  // Return fallback content if no client available
  if (!notionClient || process.env.NOTION_API_KEY === 'test') {
    console.warn('⚠️ NOTION_API_KEY not configured, using fallback content')
    return {
      content: `# Fallback Content\n\nConfigure NOTION_API_KEY environment variable to fetch real content.\n\nPage ID: ${pageId}`
    }
  }

  try {
    const { results } = await notionClient.blocks.children.list({ block_id: pageId })

    const codeBlock = results.find(
      block => isFullBlock(block) && block.type === 'code'
    ) as CodeBlockObjectResponse | undefined

    if (!codeBlock) {
      throw new Error(`Failed to fetch Notion content of ID: ${pageId}`)
    }

    const { plain_text } = codeBlock.code.rich_text[0]

    return { content: plain_text }
  } catch (error) {
    console.warn('⚠️ Notion API error, using fallback content:', error)
    return {
      content: `# Error Loading Content\n\nFailed to fetch content from Notion.\n\nPage ID: ${pageId}\nError: ${error}`
    }
  }
}
