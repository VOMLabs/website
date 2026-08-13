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
    <main className="flex flex-col items-center px-6 py-24">
      <div className="flex w-full max-w-2xl flex-col items-center gap-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Products
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Open-source software built by VOMLabs.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          {products.length === 0 ? (
            <p className="text-muted-foreground py-8 text-center text-sm">
              No products yet. Check back soon!
            </p>
          ) : (
            products.map((product) => (
              <article
                className="border-border bg-muted flex flex-col gap-3 border p-6"
                key={product.id}
              >
                <div>
                  <h2 className="text-lg font-medium">{product.name}</h2>
                  <p className="text-muted-foreground text-sm font-medium">
                    {product.tagline}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                {product.githubUrl && (
                  <a
                    className="text-sm underline underline-offset-4 hover:underline"
                    href={product.githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
