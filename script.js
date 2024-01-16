document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");
    const languages = ["Hello!", "¡Hola!", "Bonjour!", "Ciao!", "Konnichiwa!", "Kumusta!"];
  
    let index = 0;
  
    function changeGreeting() {
      greetingElement.textContent = languages[index];
      index = (index + 1) % languages.length;
    }
  
    setInterval(changeGreeting, 1000);
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
