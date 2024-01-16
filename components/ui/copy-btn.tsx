import * as React from "react";
import { useEffect, useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setCopied] = useState<boolean>(false);
  const [canCopy, setCanCopy] = useState<boolean>(false);

  useEffect(() => {
    if (
      typeof window === "object" &&
      typeof navigator.clipboard === "object" &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      setCanCopy(true);
    }
  }, []);

  if (!canCopy) return null;

  function handleCopy(e: React.FormEvent<HTMLButtonElement>) {
    e.currentTarget.blur();
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="flex items-start">
      <button
        aria-label="Salin"
        className="relative text-sc-dark hover:text-sc-light hover:bg-sc-green ring-1 rounded-xl ring-sc-blue hover:ring-sc-green z-10 p-2"
        onClick={handleCopy}
        type="button"
      >
        {isCopied ? "Tersalin" : "Salin"}
      </button>
    </div>
  );
}
