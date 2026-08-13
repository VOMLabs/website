import { createFileRoute, notFound } from "@tanstack/react-router";

import { getPostById } from "@/lib/db/functions";

export const Route = createFileRoute("/blog/posts/$id")({
  loader: async ({ params }) => {
    const { post } = await getPostById({ data: params.id });

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
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            {post.title}
          </h1>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
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
          <div className="prose prose-neutral dark:prose-invert max-w-none text-sm leading-relaxed break-words wrap-anywhere whitespace-pre-wrap">
            {post.content}
          </div>
        </div>
      </article>
    </main>
  );
}
