export const sendPromptRequest = async (urls, keywords) => {
  try {
    const response = await fetch("/api/prompts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ urls, keywords }),
    });
    return response.ok;
  } catch (error) {
    console.error("Prompt request error:", error);
    return false;
  }
};

export const fetchResults = async () => {
  try {
    const response = await fetch("/api/results");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch results error:", error);
    return [];
  }
};
