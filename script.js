// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// POPUP
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("img-expanded");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// FORMULARIO
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  let valid = true;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('mensagem').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Por favor, preencha todos os campos.');
    valid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert('Por favor, insira um email válido.');
    valid = false;
  }

  if (valid) {
    alert('Formulário enviado com sucesso!');
    form.reset();
  }
});

// ACCORDION
document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    
    const panel = button.nextElementSibling;
    if (panel.classList.contains('open')) {
      panel.classList.remove('open');
      panel.style.maxHeight = null;
    } else {
      panel.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + '25px';
    }
  });
});
