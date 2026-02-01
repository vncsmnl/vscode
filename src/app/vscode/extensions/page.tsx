import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'Extensions',
}

export default async function Extensions() {
  {/* @ts-expect-error Server Component */ }
  return <GistContent gistUrl="https://gist.githubusercontent.com/vncsmnl/80cd621c15854c98c7344097ed231c6f/raw/abca3419a80a310d2899ad921bf629abd7b7b488/extensions.json" />
}