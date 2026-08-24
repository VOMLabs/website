import { Markdown } from "@tanstack/markdown/react";
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
    <main className="border-border border-t">
      <article className="container-editorial py-16 md:py-24">
        <header className="mb-12 flex max-w-3xl flex-col gap-4 md:mb-16">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Journal
          </p>
          <h1 className="display">{post.title}</h1>
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
        </header>
        <div className="border-border border-t pt-8">
          <div className="prose prose-neutral dark:prose-invert max-w-none break-words">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>
      </article>
    </main>
  );
}
