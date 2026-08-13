import { createFileRoute } from "@tanstack/react-router";

import { Link } from "@/components/link";
import { getPublishedPosts } from "@/lib/db/functions";

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    const { posts } = await getPublishedPosts();
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
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Blog
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Updates, announcements, and articles from VOMLabs.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          {posts.length === 0 ? (
            <p className="text-muted-foreground py-8 text-center text-sm">
              No blog posts yet. Check back soon!
            </p>
          ) : (
            posts.map((post) => (
              <Link
                className="border-border bg-muted hover:bg-accent block border p-6 transition-colors"
                key={post.id}
                to="/blog/posts/$id"
                params={{ id: post.id }}
              >
                <h2 className="mb-2 text-lg font-medium">{post.title}</h2>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="text-muted-foreground flex items-center gap-2 text-xs">
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
