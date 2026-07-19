import { createFileRoute, Link, Outlet, redirect } from "@tanstack/react-router";
import { getSession } from "@/lib/auth-utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/admin")({
  beforeLoad: async () => {
    const session = await getSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    if (session.user.role !== "admin") {
      throw redirect({ to: "/" });
    }
    return { user: session.user };
  },
  component: AdminLayout,
});

const sidebarItems = [
  { label: "Dashboard", to: "/admin" },
  { label: "FAQ", to: "/admin/faq" },
  { label: "Blog Posts", to: "/admin/blogs" },
  { label: "Accounts", to: "/admin/accounts" },
];

function AdminLayout() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Link className="flex items-center gap-2 px-2" to="/">
            <span className="size-1.5 bg-primary" />
            <span className="font-bold text-sm">VOMLabs Admin</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Management</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton render={<Link to={item.to} />}>
                      {item.label}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-border border-b px-4">
          <SidebarTrigger />
          <Separator className="h-6" orientation="vertical" />
          <span className="text-muted-foreground text-sm">Admin Dashboard</span>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
