import { createFileRoute } from "@tanstack/react-router";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/db";
import { faqs, blogPosts, users } from "@/lib/db/schema";

export const Route = createFileRoute("/admin/")({
  loader: async () => {
    const [faqCount] = await db.select({ count: faqs.id }).from(faqs);
    const [postCount] = await db
      .select({ count: blogPosts.id })
      .from(blogPosts);
    const [userCount] = await db.select({ count: users.id }).from(users);
    return {
      faqCount: Number(faqCount?.count ?? 0),
      postCount: Number(postCount?.count ?? 0),
      userCount: Number(userCount?.count ?? 0),
    };
  },
  component: AdminDashboard,
});

function AdminDashboard() {
  const { faqCount, postCount, userCount } = Route.useLoaderData();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm">
              FAQ Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{faqCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm">
              Blog Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{postCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm">
              Accounts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{userCount}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
