import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const sectionIds = [
  "introduction",
  "education",
  "work-experience",
  "projects",
  "certifications",
  "contact",
]

const data = {
  navMain: [
    {
      title: "About Me",
      url: "#introduction",
      items: [
        { title: "Introduction", url: "#introduction" },
        { title: "My Education Background", url: "#education" },
        { title: "My Work Experiences", url: "#work-experience" },
        { title: "Projects", url: "#projects" },
        { title: "Certifications", url: "#certifications" },
        { title: "Contact Me", url: "#contact" },
      ],
    },
  ],
}

export function AppSidebar(props) {
  const [activeId, setActiveId] = React.useState("introduction")

  React.useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -55% 0px",
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <Sidebar className="bg-zinc-900 text-zinc-100 border-r border-zinc-800" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#introduction">
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Ooi Jing Ru</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((group) => (
              <SidebarMenuItem key={group.title}>
                <SidebarMenuButton asChild>
                  <a href={group.url} className="font-medium">
                    {group.title}
                  </a>
                </SidebarMenuButton>

                {group.items?.length ? (
                  <SidebarMenuSub>
                    {group.items.map((link) => {
                      const id = link.url.replace("#", "")
                      return (
                        <SidebarMenuSubItem key={link.title}>
                          <SidebarMenuSubButton asChild isActive={activeId === id}>
                            <a href={link.url}>{link.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )
                    })}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}