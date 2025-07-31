import { createClient } from '@vercel/edge-config'
import { z } from 'zod'

const notionPagesIdStore = z.object({
  terminal_general: z.string(),
  terminal_fish: z.string(),
  setup_dev: z.string(),
  setup_gaming: z.string(),
})

// Fallback data for development/build
const fallbackData = {
  terminal_general: 'fallback-id-1',
  terminal_fish: 'fallback-id-2',
  setup_dev: 'fallback-id-3',
  setup_gaming: 'fallback-id-4',
}

export async function getNotionPagesId() {
  // Check if EDGE_CONFIG is properly configured
  if (!process.env.EDGE_CONFIG || process.env.EDGE_CONFIG === "https://edge-config.vercel.com/test?token=test") {
    console.warn('⚠️ EDGE_CONFIG not configured, using fallback data')
    return notionPagesIdStore.parse(fallbackData)
  }

  try {
    const config = createClient(process.env.EDGE_CONFIG)
    const pagesId = await config.get('notion')
    return notionPagesIdStore.parse(pagesId)
  } catch (error) {
    console.warn('⚠️ Edge Config error, using fallback data:', error)
    return notionPagesIdStore.parse(fallbackData)
  }
}
