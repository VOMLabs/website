import { createFileRoute } from "@tanstack/react-router";
import { db } from "@/lib/db";
import { blogPosts, users } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { Link } from "@/components/link";

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    const posts = await db
      .select({
        id: blogPosts.id,
        title: blogPosts.title,
        slug: blogPosts.slug,
        excerpt: blogPosts.excerpt,
        createdAt: blogPosts.createdAt,
        authorName: users.name,
      })
      .from(blogPosts)
      .innerJoin(users, eq(blogPosts.authorId, users.id))
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.createdAt));
    return { posts };
  },
  component: BlogPage,
});

function BlogPage() {
  const { posts } = Route.useLoaderData();
  return (
    <main className="flex flex-col items-center px-6 py-24">
      <div className="flex w-full max-w-2xl flex-col items-center gap-8">
        <div className="space-y-2 text-center">
          <h1 className="font-bold text-3xl tracking-tight lg:text-4xl">Blog</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Updates, announcements, and articles from VOMLabs.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          {posts.length === 0 ? (
            <p className="py-8 text-center text-muted-foreground text-sm">
              No blog posts yet. Check back soon!
            </p>
          ) : (
            posts.map((post) => (
              <Link
                className="block border border-border bg-muted p-6 transition-colors hover:bg-accent"
                key={post.id}
                to="/blog/posts/$id"
                params={{ id: post.id }}
              >
                <h2 className="mb-2 font-medium text-lg">{post.title}</h2>
                <p className="mb-3 text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <span>{post.authorName}</span>
                  <span>&middot;</span>
                  <span>
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
