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
    <main className="border-border border-t">
      <div className="container-editorial py-16 md:py-24">
        <header className="mb-12 flex max-w-3xl flex-col gap-4 md:mb-16">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Journal
          </p>
          <h1 className="display">Blog</h1>
          <p className="lead max-w-2xl">
            Updates, announcements, and articles from VOMLabs.
          </p>
        </header>
        {posts.length === 0 ? (
          <p className="text-muted-foreground py-8 text-sm">
            No blog posts yet. Check back soon!
          </p>
        ) : (
          <div className="divide-border border-border flex flex-col divide-y border-y">
            {posts.map((post) => (
              <Link
                className="group grid gap-2 py-8 md:grid-cols-[1fr_auto] md:items-baseline md:gap-10"
                key={post.id}
                to="/blog/posts/$id"
                params={{ id: post.id }}
              >
                <div>
                  <h2 className="text-lg font-medium tracking-[-0.01em] transition-transform duration-200 group-hover:translate-x-0.5 md:text-xl">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
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
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
