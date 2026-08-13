import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

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
    <main className="flex flex-col items-center px-6 py-24">
      <div className="flex w-full max-w-sm flex-col items-center gap-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Sign Up
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Create an account to get started.
          </p>
        </div>
        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="border-border bg-muted placeholder:text-muted-foreground focus:border-ring h-9 border px-3 text-sm outline-none"
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              type="text"
              value={name}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" htmlFor="username">
              Username
            </label>
            <input
              className="border-border bg-muted placeholder:text-muted-foreground focus:border-ring h-9 border px-3 text-sm outline-none"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="johndoe"
              required
              type="text"
              value={username}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="border-border bg-muted placeholder:text-muted-foreground focus:border-ring h-9 border px-3 text-sm outline-none"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              type="email"
              value={email}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="border-border bg-muted placeholder:text-muted-foreground focus:border-ring h-9 border px-3 text-sm outline-none"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              type="password"
              value={password}
            />
          </div>
          <button
            className="bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-9 items-center justify-center border border-transparent px-2.5 text-xs font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50"
            disabled={loading}
            type="submit"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
        <p className="text-muted-foreground text-xs">
          Already have an account?{" "}
          <Link
            className="text-foreground hover:text-foreground/80 underline underline-offset-4"
            to="/login"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
