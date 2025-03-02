import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Settings',
}

export default async function Settings() {
  {/* @ts-expect-error Server Component */ }
  return <GistContent gistUrl="https://gist.githubusercontent.com/vncsmnl/c194494f865b54f67c6b5f6a1f7cfc85/raw/eb4ec3e3b4567ce07b6d94036e079cd8326c8f3c/settings.json" />
}