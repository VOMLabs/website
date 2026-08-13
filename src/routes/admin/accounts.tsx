import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

const setRole = createServerFn({ method: "POST" })
  .validator((data: { userId: string; role: string }) => data)
  .handler(async ({ data }) => {
    await db
      .update(users)
      .set({ role: data.role })
      .where(eq(users.id, data.userId));
  });

export const Route = createFileRoute("/admin/accounts")({
  loader: async () => {
    const accounts = await db.select().from(users);
    return { accounts };
  },
  component: AdminAccountsPage,
});

function AdminAccountsPage() {
  const { accounts } = Route.useLoaderData();
  const navigate = useNavigate();

  async function handleRoleToggle(userId: string, currentRole: string | null) {
    const newRole = currentRole === "admin" ? "user" : "admin";
    try {
      await setRole({ data: { userId, role: newRole } });
      toast.success(`Role updated to ${newRole}`);
      navigate({ to: "/admin/accounts", replace: true });
    } catch {
      toast.error("Failed to update role");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Manage Accounts</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.id}>
              <TableCell
                className="max-w-[200px] truncate font-medium"
                title={account.name}
              >
                {account.name}
              </TableCell>
              <TableCell
                className="text-muted-foreground max-w-[260px] truncate text-sm"
                title={account.email}
              >
                {account.email}
              </TableCell>
              <TableCell className="text-muted-foreground max-w-[160px] truncate text-sm">
                {account.username ?? "\u2014"}
              </TableCell>
              <TableCell>
                <Badge
                  variant={account.role === "admin" ? "default" : "secondary"}
                >
                  {account.role ?? "user"}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleRoleToggle(account.id, account.role)}
                  size="sm"
                  variant="outline"
                >
                  Toggle Admin
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
