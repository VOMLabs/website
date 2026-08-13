import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
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
import { db } from "@/lib/db";
import { faqs } from "@/lib/db/schema";

const deleteFaq = createServerFn({ method: "POST" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    await db.delete(faqs).where(eq(faqs.id, id));
  });

const addFaq = createServerFn({ method: "POST" })
  .validator((data: { question: string; answer: string }) => data)
  .handler(async ({ data }) => {
    await db.insert(faqs).values(data);
  });

export const Route = createFileRoute("/admin/faq")({
  loader: async () => {
    const items = await db.select().from(faqs);
    return { items };
  },
  component: AdminFaqPage,
});

function AdminFaqPage() {
  const { items } = Route.useLoaderData();
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [adding, setAdding] = useState(false);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    setAdding(true);
    try {
      await addFaq({ data: { question, answer } });
      toast.success("FAQ added");
      setQuestion("");
      setAnswer("");
      navigate({ to: "/admin/faq", replace: true });
    } catch {
      toast.error("Failed to add FAQ");
    }
    setAdding(false);
  }

  async function handleDelete(id: string) {
    try {
      await deleteFaq({ data: id });
      toast.success("FAQ deleted");
      navigate({ to: "/admin/faq", replace: true });
    } catch {
      toast.error("Failed to delete FAQ");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Manage FAQ</h1>
      <form
        className="border-border bg-muted flex flex-col gap-3 border p-4"
        onSubmit={handleAdd}
      >
        <Input
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          value={question}
        />
        <Input
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
          value={answer}
        />
        <Button disabled={adding} type="submit">
          {adding ? "Adding..." : "Add FAQ"}
        </Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Question</TableHead>
            <TableHead>Answer</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell
                className="max-w-[280px] truncate font-medium"
                title={item.question}
              >
                {item.question}
              </TableCell>
              <TableCell
                className="text-muted-foreground max-w-[320px] truncate text-sm"
                title={item.answer}
              >
                {item.answer}
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleDelete(item.id)}
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
