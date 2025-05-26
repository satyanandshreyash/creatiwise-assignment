import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { IconBrandGithub } from "@tabler/icons-react"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center mt-2 gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 justify-between">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-3xl font-extrabold text-center">Articles</h1>
        <div className=" flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/satyanandshreyash/creatiwise-assignment"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              <IconBrandGithub />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
