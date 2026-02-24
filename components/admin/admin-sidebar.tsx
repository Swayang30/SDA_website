"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LotusIcon, OmIcon } from "@/components/icons/spiritual-icons";
import {
  LayoutDashboard,
  IndianRupee,
  FileText,
  Calendar,
  Users,
  BookOpen,
  Bell,
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  History,
  UserCircle,
  BarChart3,
  PenLine,
  Video,
  Music,
  ImageIcon,
  CalendarPlus,
  ClipboardList,
  CalendarDays,
  UserPlus,
  MessageSquare,
  Upload,
  Newspaper,
  Zap,
  Shield,
  Search,
  LogOut,
} from "lucide-react";

const adminNavigation = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Donations & Funds",
    icon: IndianRupee,
    children: [
      { title: "Donation Channels", href: "/admin/donations/channels", icon: CreditCard },
      { title: "Transaction History", href: "/admin/donations/transactions", icon: History },
      { title: "Donor Management", href: "/admin/donations/donors", icon: UserCircle },
      { title: "Reports & Analytics", href: "/admin/donations/reports", icon: BarChart3 },
    ],
  },
  {
    title: "Content Management",
    icon: FileText,
    children: [
      { title: "Teachings", href: "/admin/content/teachings", icon: BookOpen },
      { title: "Articles & Blog", href: "/admin/content/articles", icon: PenLine },
      { title: "Video Uploads", href: "/admin/content/videos", icon: Video },
      { title: "Audio Uploads", href: "/admin/content/audio", icon: Music },
      { title: "Gallery", href: "/admin/content/gallery", icon: ImageIcon },
    ],
  },
  {
    title: "Events Management",
    icon: Calendar,
    children: [
      { title: "Create/Edit Events", href: "/admin/events/manage", icon: CalendarPlus },
      { title: "Registrations", href: "/admin/events/registrations", icon: ClipboardList },
      { title: "Calendar", href: "/admin/events/calendar", icon: CalendarDays },
    ],
  },
  {
    title: "Volunteer Management",
    icon: Users,
    children: [
      { title: "Applications", href: "/admin/volunteers/applications", icon: UserPlus },
      { title: "Assignments", href: "/admin/volunteers/assignments", icon: ClipboardList },
      { title: "Communication", href: "/admin/volunteers/communication", icon: MessageSquare },
    ],
  },
  {
    title: "Publications",
    icon: BookOpen,
    children: [
      { title: "Books & PDFs", href: "/admin/publications/books", icon: Upload },
      { title: "Newsletters", href: "/admin/publications/newsletters", icon: Newspaper },
    ],
  },
  {
    title: "Notifications",
    href: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

interface AdminSidebarProps {
  className?: string;
}

export function AdminSidebar({ className }: AdminSidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>(["Donations & Funds"]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => pathname === href;
  const isSectionActive = (children: { href: string }[]) =>
    children.some((child) => pathname.startsWith(child.href));

  return (
    <aside
      className={cn(
        "flex h-screen flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!collapsed && (
          <Link href="/admin" className="flex items-center gap-2">
            <OmIcon className="h-8 w-8 text-sidebar-primary" />
            <span className="font-serif text-lg font-semibold">Admin</span>
          </Link>
        )}
        {collapsed && (
          <Link href="/admin" className="mx-auto">
            <OmIcon className="h-8 w-8 text-sidebar-primary" />
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent",
            collapsed && "mx-auto"
          )}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Search (collapsed shows icon only) */}
      {!collapsed && (
        <div className="border-b border-sidebar-border p-4">
          <div className="flex items-center gap-2 rounded-md bg-sidebar-accent px-3 py-2 text-sm text-sidebar-foreground/70">
            <Search className="h-4 w-4" />
            <span>Search...</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="space-y-1">
          {adminNavigation.map((item) => {
            if (item.children) {
              const sectionActive = isSectionActive(item.children);
              const isOpen = openSections.includes(item.title);

              if (collapsed) {
                return (
                  <div key={item.title} className="relative group">
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-center px-2 text-sidebar-foreground hover:bg-sidebar-accent",
                        sectionActive && "bg-sidebar-accent text-sidebar-primary"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                    </Button>
                    {/* Tooltip for collapsed state */}
                    <div className="absolute left-full top-0 ml-2 hidden group-hover:block z-50">
                      <div className="rounded-md bg-popover p-2 shadow-lg border min-w-48">
                        <p className="font-medium text-sm text-popover-foreground mb-2">{item.title}</p>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent",
                              isActive(child.href) && "bg-accent text-accent-foreground"
                            )}
                          >
                            <child.icon className="h-4 w-4" />
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Collapsible
                  key={item.title}
                  open={isOpen}
                  onOpenChange={() => toggleSection(item.title)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent",
                        sectionActive && "bg-sidebar-accent text-sidebar-primary"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-1 space-y-1 pl-4">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start gap-3 text-sm text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                            isActive(child.href) &&
                              "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                          )}
                        >
                          <child.icon className="h-4 w-4" />
                          {child.title}
                        </Button>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            }

            return (
              <Link key={item.href} href={item.href!}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full text-sidebar-foreground hover:bg-sidebar-accent",
                    collapsed ? "justify-center px-2" : "justify-start gap-3",
                    isActive(item.href!) &&
                      "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {!collapsed && <span>{item.title}</span>}
                </Button>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Quick Actions & User */}
      <div className="border-t border-sidebar-border p-4">
        {!collapsed && (
          <div className="mb-4 space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-sidebar-foreground/50">
              Quick Actions
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-sidebar-border bg-transparent text-sidebar-foreground hover:bg-sidebar-accent"
              >
                <Zap className="mr-1 h-3 w-3" />
                Quick Post
              </Button>
            </div>
          </div>
        )}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
            <Shield className="h-4 w-4" />
          </div>
          {!collapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium">Admin</p>
              <p className="text-xs text-sidebar-foreground/60">Trust Manager</p>
            </div>
          )}
          {!collapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
}
