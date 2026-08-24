import ArrowUpRight from "@gravity-ui/icons/ArrowUpRight";
import { createFileRoute } from "@tanstack/react-router";

import { getProducts } from "@/lib/db/functions";

export const Route = createFileRoute("/products")({
  loader: async () => {
    const { products } = await getProducts();
    return { products };
  },
  component: ProductsPage,
});

function ProductsPage() {
  const { products } = Route.useLoaderData();

  return (
    <main className="border-border border-t">
      <div className="container-editorial py-16 md:py-24">
        <header className="mb-12 flex max-w-3xl flex-col gap-4 md:mb-16">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Store
          </p>
          <h1 className="display">Products</h1>
          <p className="lead max-w-2xl">
            Open-source software built by VOMLabs.
          </p>
        </header>
        {products.length === 0 ? (
          <p className="text-muted-foreground py-8 text-sm">
            No products yet. Check back soon!
          </p>
        ) : (
          <div className="divide-border border-border flex flex-col divide-y border-y">
            {products.map((product) => (
              <article
                className="grid gap-3 py-8 md:grid-cols-[1fr_auto] md:items-baseline md:gap-10"
                key={product.id}
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="text-lg font-medium tracking-[-0.01em] md:text-xl">
                      {product.name}
                    </h2>
                    <span className="text-muted-foreground font-mono text-xs tracking-[0.08em] uppercase">
                      {product.tagline}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                {product.githubUrl && (
                  <a
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline"
                    href={product.githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View on GitHub
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
