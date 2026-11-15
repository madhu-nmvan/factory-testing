import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((d: { message: string }) => setMessage(d.message))
      .catch(() => setError(true));
  }, []);

  return (
    <main className="page">
      <h1 className="greeting">{error ? "Failed to load" : message}</h1>
    </main>
  );
}
