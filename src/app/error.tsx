"use client";

import React, { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps): React.ReactElement {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">Something went wrong</h1>
        <p className="text-lg text-muted-foreground mb-6">An unexpected error occurred. You can try reloading the page.</p>
        <div className="flex justify-center gap-4">
          <button onClick={() => reset()} className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">Try again</button>
        </div>
      </div>
    </div>
  );
}
