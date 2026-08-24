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
import { addFaq, deleteFaq, getAllFaqs } from "@/lib/db/functions";

export const Route = createFileRoute("/admin/faq")({
  loader: async () => {
    const { faqs } = await getAllFaqs();
    return { items: faqs };
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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          Admin
        </p>
        <h1 className="section-title">Manage FAQ</h1>
      </div>
      <form
        className="border-border flex flex-col gap-3 border p-4"
        onSubmit={handleAdd}
      >
        <Input
          aria-label="Question"
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          value={question}
        />
        <Input
          aria-label="Answer"
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
