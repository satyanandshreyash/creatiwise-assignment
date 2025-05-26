import {
    AudioWaveform,
    BellRing,
    CircleDollarSign,
    Command,
    GalleryVerticalEnd,
    GitForkIcon,
    Info,
    Link2Icon,
    MessageCircle,
    NotepadText,
    Plug2Icon,
    ScrollText,
    Star,
} from "lucide-react"

// This is sample data.
export const sidebarData = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Articles",
            url: "#",
            icon: ScrollText,
            isActive: true,
            items: [
                {
                    title: "Create Article",
                    url: "#",
                    isActive: false,
                },
                {
                    title: "Generated Articles",
                    url: "#",
                    isActive: true,
                },
                {
                    title: "Keyword Projects",
                    url: "#",
                    isActive: false,
                },
                {
                    title: "AI Keyword to Article",
                    url: "#",
                    isActive: false,
                },
                {
                    title: "Steal Competitor Keyword",
                    url: "#",
                    isActive: false,
                },
                {
                    title: "Import Keyword from GSC",
                    url: "#",
                    isActive: false,
                },
                {
                    title: "Manual Keyword to Article",
                    url: "#",
                    isActive: false,
                },
                {
                    title: "Bulk Keyword to Article",
                    url: "#",
                    isActive: false,
                },
                {
                    title: "Longtail Keyword to Article",
                    url: "#",
                    isActive: false,
                },
                {
                    title: "Article settings",
                    url: "#",
                    isActive: false,
                },
            ],
        },
    ],
    projects: [
        {
            name: "Auto Blog",
            url: "#",
            icon: NotepadText,
        },
        {
            name: "Internal Links",
            url: "#",
            icon: GitForkIcon,
        },
        {
            name: "Free Backlinks",
            url: "#",
            icon: Link2Icon,
        },
        {
            name: "Integrations",
            url: "#",
            icon: Plug2Icon,
        },
        {
            name: "Subscription",
            url: "#",
            icon: Star,
        },
        {
            name: "Affiliate Program",
            url: "#",
            icon: CircleDollarSign,
        },
        {
            name: "Help Center",
            url: "#",
            icon: Info,
        },
        {
            name: "Updates",
            url: "#",
            icon: BellRing,
        },
        {
            name: "Live Chat Support",
            url: "#",
            icon: MessageCircle,
        },
    ],
}