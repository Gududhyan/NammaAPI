"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { FormInput } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [attempted, setAttempted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: { email?: string; password?: string } = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (!password) next.password = "Password is required.";
    setErrors(next);
    if (Object.keys(next).length === 0) setAttempted(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <FormInput
        label="Email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        placeholder="you@company.com"
      />
      <FormInput
        label="Password"
        type="password"
        required
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        placeholder="••••••••"
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-text-secondary">
          <input
            type="checkbox"
            className="h-3.5 w-3.5 accent-brand-primary"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember me
        </label>
        <Link href="#" className="font-medium text-brand-primary hover:text-brand-dark">
          Forgot password?
        </Link>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Login
      </Button>

      {attempted && (
        <p className="rounded-lg border border-brand-border bg-brand-light px-4 py-3 text-xs text-text-secondary">
          This is a demo UI — authentication is not yet connected to a backend. Once the ASP.NET Core API is
          integrated, this form will authenticate against your business account.
        </p>
      )}

      <p className="text-center text-sm text-text-secondary">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-brand-primary hover:text-brand-dark">
          Create one
        </Link>
      </p>
    </form>
  );
}
