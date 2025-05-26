import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { sidebarData } from "@/data/sidebarData"
import { Separator } from "@radix-ui/react-separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import logo from "@/assets/logo.png"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarGroup className="group-data-[collapsible=icon]:hidden px-1 -mt-1">
        <SidebarHeader>
          <img src={logo} alt="Logo" className="w-24 mx-auto" />
        </SidebarHeader>
        <DropdownMenu >
          <DropdownMenuTrigger className="" asChild>
            <div className="flex gap-2 border border-solid rounded-full m-2 p-2 items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-600"></div>
              <p className="text-sm font-semibold">amazon.com</p>
              <ChevronDown size={20} className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-solid mx-2 rounded-lg w-full">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <div className="flex gap-2 px-2 items-center hover:bg-gray-100">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-600"></div>
                  <p className="text-sm font-semibold">amazon.com</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem >
                <div className="flex gap-2 px-2 items-center hover:bg-gray-100">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-600"></div>
                  <p className="text-sm font-semibold">google.com</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem >
                <div className="flex gap-2 px-2 items-center hover:bg-gray-100">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-600"></div>
                  <p className="text-sm font-semibold">facebook.com</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarGroup>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
        <NavProjects projects={sidebarData.projects} />
      </SidebarContent>
      <Separator className="border border-gray-200" />
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
