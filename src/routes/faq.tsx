import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import { db } from "@/lib/db";
import { faqs } from "@/lib/db/schema";

export const Route = createFileRoute("/faq")({
  loader: async () => {
    const items = await db.select().from(faqs);
    return { faqs: items };
  },
  component: FaqPage,
});

function fuzzyMatch(text: string, query: string): boolean {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) {
    return true;
  }
  let qi = 0;
  for (let ti = 0; ti < lowerText.length && qi < lowerQuery.length; ti++) {
    if (lowerText[ti] === lowerQuery[qi]) {
      qi++;
    }
  }
  return qi === lowerQuery.length;
}

function FaqPage() {
  const { faqs: allFaqs } = Route.useLoaderData();
  const [query, setQuery] = useQueryState("q", parseAsString.withDefault(""));

  const filtered = query.trim()
    ? allFaqs.filter(
        (faq) =>
          fuzzyMatch(faq.question, query) || fuzzyMatch(faq.answer, query),
      )
    : allFaqs;

  return (
    <main className="flex flex-col items-center px-6 py-24">
      <div className="flex w-full max-w-2xl flex-col items-center gap-8">
        <div className="space-y-2 text-center">
          <h1 className="font-bold text-3xl tracking-tight lg:text-4xl">
            FAQ.
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Answers to what people usually want to know about VOMLabs.
          </p>
        </div>
        <div className="relative w-full">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            className="h-9 w-full border border-border bg-muted pr-3 pl-9 text-sm outline-none placeholder:text-muted-foreground focus:border-ring"
            onChange={(e) => setQuery(e.target.value || null)}
            placeholder="Search questions..."
            type="text"
            value={query}
          />
        </div>
        <div className="flex w-full flex-col gap-2 text-left">
          {filtered.length === 0 ? (
            <p className="py-8 text-center text-muted-foreground text-sm">
              No results found for &quot;{query}&quot;
            </p>
          ) : (
            filtered.map((faq) => (
              <div
                className="border border-border bg-muted p-4"
                key={faq.id}
              >
                <p className="mb-1 font-medium text-sm">{faq.question}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
