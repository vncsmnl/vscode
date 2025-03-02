import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Extensions',
}

export default async function Extensions() {
  {/* @ts-expect-error Server Component */ }
  return <GistContent gistUrl="https://gist.githubusercontent.com/vncsmnl/80cd621c15854c98c7344097ed231c6f/raw/c1cfa85a92a85948fb7c6ee66348f050229de319/extensions.json" />
}