// frontend/app/page.tsx
'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
    fetch(`${apiUrl}/api/hello`)
        .then(res => res.text())
        .then(setMessage)
        .catch(console.error);
  }, []);

  return (
      <main>
        <h1>🎤 백엔드 연동 성공</h1>
        <p>{message}</p>
      </main>
  );
}
