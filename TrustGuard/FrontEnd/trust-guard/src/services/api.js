const API_URL = "http://localhost:8080/api";

export async function fetchBanks() {
  const res = await fetch(`${API_URL}/banks`);
  return res.json();
}

export async function fetchStates() {
  const res = await fetch(`${API_URL}/states`);
  return res.json();
}

export async function fetchChannels() {
  const res = await fetch(`${API_URL}/channels`);
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${API_URL}/categories`);
  return res.json();
}

export async function sendReport(data) {
  const res = await fetch(`${API_URL}/reports`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    const error = new Error("Falha ao enviar denúncia");
    error.status = res.status;
    error.validation = body; 
    throw error;
  }

  return body;
}
