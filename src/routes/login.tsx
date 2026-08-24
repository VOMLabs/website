import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth-client";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn.email({ email, password });
    setLoading(false);
    if (error) {
      toast.error(error.message || "Failed to sign in");
    } else {
      toast.success("Signed in successfully");
      window.location.href = "/";
    }
  }

  return (
    <main className="border-border border-t">
      <div className="container-editorial flex flex-col items-start py-16 md:py-24">
        <div className="flex w-full max-w-sm flex-col gap-8">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Account
            </p>
            <h1 className="display">Sign In</h1>
            <p className="lead">
              Enter your credentials to access your account.
            </p>
          </header>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                autoComplete="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={email}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                autoComplete="current-password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                type="password"
                value={password}
              />
            </div>
            <Button disabled={loading} type="submit">
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <p className="text-muted-foreground text-sm">
            Don&apos;t have an account?{" "}
            <Link
              className="text-foreground hover:text-foreground/80 underline underline-offset-4"
              to="/signup"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
