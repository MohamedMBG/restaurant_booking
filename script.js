document
  .getElementById("reservation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      guests: document.getElementById("guests").value,
      message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs
      .send("service_7j6zixe", "template_84v2uig", formData) // Replace with your EmailJS service ID and template ID
      .then(
        function (response) {
          alert("Reservation successful! We will contact you shortly.");
          document.getElementById("reservation-form").reset(); // Reset the form
        },
        function (error) {
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  });
