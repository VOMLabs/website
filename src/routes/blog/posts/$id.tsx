import { createFileRoute, notFound } from "@tanstack/react-router";
import { db } from "@/lib/db";
import { blogPosts, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const Route = createFileRoute("/blog/posts/$id")({
  loader: async ({ params }) => {
    const [post] = await db
      .select({
        id: blogPosts.id,
        title: blogPosts.title,
        content: blogPosts.content,
        excerpt: blogPosts.excerpt,
        createdAt: blogPosts.createdAt,
        authorName: users.name,
      })
      .from(blogPosts)
      .innerJoin(users, eq(blogPosts.authorId, users.id))
      .where(eq(blogPosts.id, params.id));

    if (!post) {
      throw notFound();
    }

    return { post };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  return (
    <main className="flex flex-col items-center px-6 py-24">
      <article className="flex w-full max-w-2xl flex-col gap-6">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl tracking-tight lg:text-4xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
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
        </div>
        <div className="border-border border-t pt-6">
          <div className="prose prose-neutral dark:prose-invert max-w-none whitespace-pre-wrap text-sm leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>
    </main>
  );
}
