"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  Github,
  Instagram,
  Linkedin,
  Rocket,
  Twitter,
  User,
  Youtube
} from 'lucide-react'
import { MenuButton } from './MenuButton'

const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/vncsmnl',
    icon: <Github size={14} />
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/vncsmnl',
    icon: <Instagram size={14} />
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/vncsmnl/',
    icon: <Linkedin size={14} />
  },
  {
    name: 'portifólio',
    url: 'https://vinicius.is-a.dev/',
    icon: <Rocket size={14} />
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/vncsmnl',
    icon: <Twitter size={14} />
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@oAvassalador',
    icon: <Youtube size={14} />
  },
]

export function SocialLinksMenuButton() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger aria-label="Redes sociais">
        <MenuButton icon={User} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content side='right' className="bg-[#282a36] z-10 flex flex-col rounded-lg overflow-auto">
          {socialLinks.map(socialItem => {
            return (
              <DropdownMenu.Item key={socialItem.url} className="outline-none">
                <a
                  href={socialItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E0DEF2] flex items-center gap-2 text-sm px-4 py-3 hover:bg-[#191a21]"
                >
                  {socialItem.icon}
                  {socialItem.name}
                </a>
              </DropdownMenu.Item>
            )
          })}
          <DropdownMenu.Arrow className="fill-[#282a36]" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}