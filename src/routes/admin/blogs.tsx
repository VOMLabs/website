import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { auth } from "@/lib/auth";

const deletePost = createServerFn({ method: "POST" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  });

const createPost = createServerFn({ method: "POST" })
  .validator((data: { title: string; slug: string; excerpt: string; content: string }) => data)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session) throw new Error("Unauthorized");
    await db.insert(blogPosts).values({
      ...data,
      authorId: session.user.id,
      published: true,
    });
  });

export const Route = createFileRoute("/admin/blogs")({
  loader: async () => {
    const posts = await db.select().from(blogPosts);
    return { posts };
  },
  component: AdminBlogsPage,
});

function AdminBlogsPage() {
  const { posts } = Route.useLoaderData();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [adding, setAdding] = useState(false);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !slug.trim() || !content.trim()) return;
    setAdding(true);
    try {
      await createPost({ data: { title, slug, excerpt, content } });
      toast.success("Post created");
      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      navigate({ to: "/admin/blogs", replace: true });
    } catch {
      toast.error("Failed to create post");
    }
    setAdding(false);
  }

  async function handleDelete(id: string) {
    try {
      await deletePost({ data: id });
      toast.success("Post deleted");
      navigate({ to: "/admin/blogs", replace: true });
    } catch {
      toast.error("Failed to delete post");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-2xl tracking-tight">Manage Blog Posts</h1>
      <form className="flex flex-col gap-3 border border-border bg-muted p-4" onSubmit={handleAdd}>
        <div className="grid gap-3 md:grid-cols-2">
          <Input onChange={(e) => setTitle(e.target.value)} placeholder="Title" value={title} />
          <Input onChange={(e) => setSlug(e.target.value)} placeholder="slug" value={slug} />
        </div>
        <Input onChange={(e) => setExcerpt(e.target.value)} placeholder="Excerpt" value={excerpt} />
        <Textarea
          className="min-h-[120px]"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Full content..."
          value={content}
        />
        <Button disabled={adding} type="submit">
          {adding ? "Creating..." : "Create Post"}
        </Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Published</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell className="text-muted-foreground text-sm">/{post.slug}</TableCell>
              <TableCell>{post.published ? "Yes" : "No"}</TableCell>
              <TableCell>
                <Button onClick={() => handleDelete(post.id)} size="sm" variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
