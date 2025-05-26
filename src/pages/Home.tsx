import { AppSidebar } from '@/components/app-sidebar'
import { DataTable } from '@/components/data-table'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Tabs, TabsList } from '@/components/ui/tabs'
import { tableData } from '@/data/articleData'
import { useIsMobile } from '@/hooks/use-mobile'
import { TabsTrigger } from '@radix-ui/react-tabs'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Home = () => {
    const [activeTab, setActiveTab] = useState<string>("generated-articles");
    const [searchInput, setSearchInput] = useState<string>("");
    const isMobile = useIsMobile();

    const filteredData = tableData.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()))

    const tabs: { label: string; value: string, style: string }[] = [
        { label: "Generated Articles", value: "generated-articles", style: "font-semibold px-8 py-2 rounded-md border border-gray-300 dark:border-gray-700 data-[state=active]:bg-blue-500 data-[state=active]:text-white" },
        { label: "Published Articles", value: "published-articles", style: "font-semibold px-8 py-2 rounded-r-md border-r border-t border-b border-gray-300 dark:border-gray-700 data-[state=active]:bg-blue-500 data-[state=active]:text-white" },
        { label: "Scheduled Articles", value: "scheduled-articles", style: "font-semibold px-8 py-2 rounded-r-md border-r border-t border-b border-gray-300 dark:border-gray-700 data-[state=active]:bg-blue-500 data-[state=active]:text-white" },
        { label: "Archived Articles", value: "archived-articles", style: "font-semibold px-8 py-2 rounded-r-md border-r border-t border-b border-gray-300 dark:border-gray-700 data-[state=active]:bg-blue-500 data-[state=active]:text-white" },
    ]
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <div className="flex flex-1 flex-col gap-2 py-2">
                    <SiteHeader />
                    {isMobile ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className='mt-2'>
                                <Button variant={"outline"} className='w-64 mx-auto flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md shadow-md'>
                                    {tabs.find(tab => tab.value === activeTab)?.label || "Select Tab"}
                                    <ChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='w-64 mx-auto'>
                                {tabs.map((tab) => (
                                    <DropdownMenuItem key={tab.value} onClick={() => setActiveTab(tab.value)} className='px-4 py-2'>
                                        {tab.label}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full flex flex-col items-center justify-center mt-4'>
                            <TabsList className='bg-white'>
                                {tabs.map((tab) => (
                                    <TabsTrigger key={tab.value} value={tab.value} className={tab.style} onClick={() => { setActiveTab(tab.value) }}>{tab.label}</TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    )}
                    <Input className='w-64 mx-auto shadow-md mt-4 text-sm md:text-md' placeholder='Search for Title & Keywords...' type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <DataTable data={filteredData} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default Home
