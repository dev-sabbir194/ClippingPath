// Show the scroll to top button when the user scrolls down 20px from the top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// sdhsdhshduihsudhiushdshdkjhsjkdhjkshdjkshjkdhsjkh

function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const templateParams = {
    from_name: name,
    from_email: email,
    from_subject: subject,
    message: message,
  };

  emailjs.send("service_zdfil8g", "template_b4u06k5", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been sent successfully!");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Sorry, something went wrong and we couldn't send your message.");
    }
  );
}
