// *********************************************** SLIDER CODE ***********************************************

// Tableau contenant les images pour le slider
const slide = ["assets/images/dark_space.jpg","assets/images/dark_space2.jpg","assets/images/dark_space3.jpg","assets/images/dark_space4.jpg"];
let numero = 0; // on a initialiser le numero de l'image pour laquelle en commence

// c'est la fonction qui permet de changer l'image du slider
function ChangeSlide(sens) {
    numero = numero + sens; 
    if (numero < 0) 
        numero = slide.length - 1; // si numero est inferieur a 0, on retourne a la derniere image
    if (numero > slide.length - 1) 
        numero = 0; // si numero depasse la longueur du tableau, on revient a la premiere image
    document.getElementById("slide").src = slide[numero]; 
}

// *********************************************** PRELAODER CODE ***********************************************

function hidePreloaderIframe() {
  // Selectionner l'iframe avec son ID
  const iframe = document.getElementById('preloader-iframe');

  // verifier si l'iframe existe pour eviter des erreurs
  if (iframe) {
    console.log('Iframe trouvee. Lancement du timer pour la masquer.');

    // un timeout pour masquer l'iframe apres 5 secondes
    setTimeout(function() {
      iframe.style.display = 'none'; // cacher l'iframe
      console.log('Iframe cachee apres 5 secondes.');
    }, 5000); 
  } else {
    console.warn('Iframe avec l\'ID "preloader-iframe" introuvable.');
  }
}
// Appel de la fonction pour executer la logique
hidePreloaderIframe();


// *********************************************** RESERVATION USING EMAILJS CODE ***********************************************

/*
  Ce code permet de recuperer les donnees du formulaire de reservation
  et de les envoyer par email a l'administrateur du site.
  Il utilise le service EmailJS, qui permet d'envoyer des emails en utilisant
  des modeles d'email personnalises.
*/

// Selectionner le formulaire avec l'ID "reservation-form" et ajouter un ecouteur d'evenement sur la soumission du formulaire
document
  .getElementById("reservation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empeche le rechargement de la page lors de la soumission du formulaire

    // Recuperation des donnees du formulaire et stockage dans un objet "formData"
    const formData = {
      name: document.getElementById("name").value, 
      email: document.getElementById("email").value, 
      phone: document.getElementById("phone").value, 
      date: document.getElementById("date").value, 
      time: document.getElementById("time").value, 
      guests: document.getElementById("guests").value,
      message: document.getElementById("message").value,
    };

    // Envoi des donnees via EmailJS
    emailjs
      .send("service_7j6zixe", "template_84v2uig", formData) 
      .then(
        function (response) {
          // En cas de succes, afficher un message de confirmation et reinitialiser le formulaire
          alert("Reservation reussie ! Nous vous contacterons bientot.");
          document.getElementById("reservation-form").reset(); 
        },
        function (error) {
          // En cas d'erreur, afficher un message d'echec
          alert("Oups ! Une erreur s'est produite. Veuillez reessayer.");
        }
      );
  });
