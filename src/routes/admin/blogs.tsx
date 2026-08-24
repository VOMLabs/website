import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { createPost, deletePost, getAllBlogPosts } from "@/lib/db/functions";

export const Route = createFileRoute("/admin/blogs")({
  loader: async () => {
    const { posts } = await getAllBlogPosts();
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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          Admin
        </p>
        <h1 className="section-title">Manage Blog Posts</h1>
      </div>
      <form
        className="border-border flex flex-col gap-3 border p-4"
        onSubmit={handleAdd}
      >
        <div className="grid gap-3 md:grid-cols-2">
          <Input
            aria-label="Title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            value={title}
          />
          <Input
            aria-label="Slug"
            onChange={(e) => setSlug(e.target.value)}
            placeholder="slug"
            value={slug}
          />
        </div>
        <Input
          aria-label="Excerpt"
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Excerpt"
          value={excerpt}
        />
        <Textarea
          aria-label="Full content"
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
              <TableCell
                className="max-w-[280px] truncate font-medium"
                title={post.title}
              >
                {post.title}
              </TableCell>
              <TableCell
                className="text-muted-foreground max-w-[160px] truncate text-sm"
                title={`/${post.slug}`}
              >
                /{post.slug}
              </TableCell>
              <TableCell>{post.published ? "Yes" : "No"}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleDelete(post.id)}
                  size="sm"
                  variant="destructive"
                >
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
