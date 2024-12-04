document.getElementById("contactForm").addEventListener("submit", function (event) {
  // Get form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const honeypot = document.querySelector("[name='_honeypot']").value;

  // Validation flags
  let isValid = true;
  let errorMessage = "";

  // Validate each field
  if (!name) {
      isValid = false;
      errorMessage += "Name is required.\n";
  }
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      isValid = false;
      errorMessage += "A valid email is required.\n";
  }
  if (!subject) {
      isValid = false;
      errorMessage += "Subject is required.\n";
  }
  if (!message) {
      isValid = false;
      errorMessage += "Message is required.\n";
  }

  // Check honeypot (should remain empty)
  if (honeypot) {
      // If the honeypot field is filled, stop submission (likely a bot).
      console.log("Spam detected via honeypot.");
      event.preventDefault(); // Prevent submission
      return;
  }

  // If invalid, prevent form submission and show errors
  if (!isValid) {
      event.preventDefault(); // Stop form submission
      alert(errorMessage);
  }
});