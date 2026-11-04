"use client";

import Image from "next/image";
import { useActionState } from "react";
import { loginAction } from "../actions";

export default function LoginPage() {
  const [state, action, pending] = useActionState(loginAction, undefined);
  return (
    <main className="grid min-h-screen place-items-center px-4">
      <form action={action} className="w-full max-w-sm rounded-2xl border border-line bg-white p-8 shadow-sm">
        <Image src="/images/logo-mark.png" alt="" width={64} height={55} priority className="mx-auto h-14 w-auto" />
        <h1 className="mt-4 text-center text-2xl font-bold">Logg inn</h1>
        <p className="mt-1 text-center text-sm text-ink/70">Administrasjon av artikler</p>
        <label htmlFor="email" className="mt-6 block font-semibold text-navy">E-post</label>
        <input id="email" name="email" type="email" required autoComplete="username" className="mt-1 w-full rounded-xl border border-line px-4 py-3" />
        <label htmlFor="password" className="mt-4 block font-semibold text-navy">Passord</label>
        <input id="password" name="password" type="password" required autoComplete="current-password" className="mt-1 w-full rounded-xl border border-line px-4 py-3" />
        {state?.error && <p role="alert" className="mt-4 font-semibold text-red-700">{state.error}</p>}
        <button disabled={pending} className="mt-6 min-h-12 w-full rounded-full bg-blue px-6 py-3 font-semibold text-white hover:bg-blue-dark disabled:opacity-60">
          {pending ? "Logger inn …" : "Logg inn"}
        </button>
      </form>
    </main>
  );
}
