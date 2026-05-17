import React from "react";
import Link from "next/link";

export default function NotFound(): React.ReactElement {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">Page not found</h1>
        <p className="text-lg text-muted-foreground mb-6">Sorry, we couldn’t find the page you’re looking for.</p>
        <Link href="/" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">Return home</Link>
      </div>
    </div>
  );
}
