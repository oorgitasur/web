document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pilotForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default form submit

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    fetch("https://script.google.com/macros/s/AKfycbxOzmpi7s0iXcXvVZLx7iXX_1GlOIKdtSePw-bvlo6fHMPGV1iDvPo0J4d5OzgvqWtEKA/exec", {
      method: "POST",
      mode: "no-cors", // prevents CORS errors for Google Apps Script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert("Thanks for submitting! ✅");
        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
  });
});
