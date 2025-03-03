import { createClient } from '@vercel/edge-config'
import { z } from 'zod'

const notionPagesIdStore = z.object({
  terminal_general: z.string(),
  terminal_fish: z.string(),
  setup_dev: z.string(),
  setup_gaming: z.string(),
})

const config = createClient(process.env.EDGE_CONFIG)

export async function getNotionPagesId() {
  const pagesId = await config.get('notion')

  return notionPagesIdStore.parse(pagesId)
}
