"use client";

import { useEffect } from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";

type LoginModalProps = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: LoginModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label="Close login" onClick={onClose}>
          ×
        </button>
        <div className="logo">Money<span>Flow</span></div>
        <h1 id="login-title">Welcome back</h1>
        <LoginForm />
        <p className="muted">New here? <Link href="/signup">Create an account</Link></p>
      </section>
    </div>
  );
}