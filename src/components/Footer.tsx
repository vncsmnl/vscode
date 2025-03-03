import { Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <div className="text-sm px-3 text-[#8F8CA8] flex gap-3 items-center justify-end bg-[#191a21]">
      <a
        href="https://github.com/vncsmnl/vscode"
        target="_blank"
        className="flex gap-1 items-center text-xs hover:text-[#E0DEF2]"
        rel="noreferrer"
      >
        <Github size={12} />
        Github
      </a>
    </div>
  )
}
