export function generateTransactionHash() {
  return (
    "0x" +
    Math.random().toString(16).substring(2) +
    Date.now().toString(16)
  );
}

export function saveTransaction(data: any) {
  const existing = JSON.parse(localStorage.getItem("transactions") || "[]");
  existing.push(data);
  localStorage.setItem("transactions", JSON.stringify(existing));
}