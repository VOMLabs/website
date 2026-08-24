import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth-client";

export const Route = createFileRoute("/signup")({ component: SignupPage });

function SignupPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await signUp.email({ name, username, email, password });
    setLoading(false);
    if (error) {
      toast.error(error.message || "Failed to sign up");
    } else {
      toast.success("Account created successfully");
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
            <h1 className="display">Sign Up</h1>
            <p className="lead">Create an account to get started.</p>
          </header>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                autoComplete="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                type="text"
                value={name}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                autoComplete="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="johndoe"
                required
                type="text"
                value={username}
              />
            </div>
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
                autoComplete="new-password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                type="password"
                value={password}
              />
            </div>
            <Button disabled={loading} type="submit">
              {loading ? "Creating account..." : "Sign Up"}
            </Button>
          </form>
          <p className="text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link
              className="text-foreground hover:text-foreground/80 underline underline-offset-4"
              to="/login"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
