const API_URL = "http://localhost:5000/api/auth/register";

async function registerUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("✅ Registration Successful!");

      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.name);

      window.location.href = "shop.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("❌ Server connection failed.");
  }
};