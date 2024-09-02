
// Function to send the dynamic content
async function generateInfo() {
  const card = document.getElementById("card");
  const text = document.getElementById("text").value;

  // Add user input to the card
  const userMessage = document.createElement("div");
  userMessage.className = "message";
  userMessage.textContent = text;
  card.appendChild(userMessage);

  const data = {
    contents: [
      {
        parts: [
          {
            text: text,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAensOkVRbHVydAJAiyX6Em-6HRHCTpUU8",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log("Response:", result.candidates[0].content.parts[0].text);

    // Display API response
    const apiMessage = document.createElement("div");
    apiMessage.className = "message";

    apiMessage.innerHTML = marked.parse(result.candidates[0].content.parts[0].text);

    card.appendChild(apiMessage);

    // Scroll to the latest message
    card.scrollTop = card.scrollHeight;
  } catch (error) {
    console.error("Error:", error);
  }
}
