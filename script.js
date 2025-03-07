/*
  Ce code permet de récupérer les données du formulaire de réservation
  et de les envoyer par email à l'administrateur du site.
  On utilise le service EmailJS (third-party service), qui permet d'envoyer des emails en utilisant
  des modèles d'email personnalisés.
*/

// On sélectionne le formulaire avec l'ID "reservation-form" et on ajoute un écouteur d'événement sur la soumission du formulaire.
document
  .getElementById("reservation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire.

    // Récupération des données du formulaire et stockage dans un objet "formData"
    const formData = {
      name: document.getElementById("name").value, 
      email: document.getElementById("email").value, 
      phone: document.getElementById("phone").value, 
      date: document.getElementById("date").value, 
      time: document.getElementById("time").value, 
      guests: document.getElementById("guests").value,
      message: document.getElementById("message").value,
    };

    // Envoi des données via EmailJS
    emailjs
      .send("service_7j6zixe", "template_84v2uig", formData) 
      .then(
        function (response) {
          // En cas de succès, afficher un message de confirmation et réinitialiser le formulaire.
          alert("Réservation réussie ! Nous vous contacterons bientôt.");
          document.getElementById("reservation-form").reset(); 
        },
        function (error) {
          // En cas d'erreur, afficher un message d'échec.
          alert("Oups ! Une erreur s'est produite. Veuillez réessayer.");
        }
      );
  });
