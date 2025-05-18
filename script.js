
    
// Hämta navigationsfältet
const nav = document.querySelector('nav');

// Lägg till en event listener för scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('transparent'); // Gör menyn genomskinlig
  } else {
    nav.classList.remove('transparent'); // Återställ till standardbakgrund
  }
});
// Hämta checkboxen och menyn
const menuCheckbox = document.getElementById('check');
const menu = document.querySelector('nav ul');

// Lägg till en event listener för att visa/dölja menyn
menuCheckbox.addEventListener('change', () => {
  if (menuCheckbox.checked) {
    menu.style.display = 'flex'; // Visa menyn
    menu.style.backgroundColor = '#b07882'; // Sätt en solid bakgrundsfärg
  } else {
    menu.style.display = 'none'; // Dölj menyn
  }
});

// Dölj menyn som standard på mobila enheter
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.style.display = 'flex'; // Visa menyn på större skärmar
  } else {
    menu.style.display = 'none'; // Dölj menyn på mindre skärmar
  }
});

// Initiera menyns tillstånd vid sidladdning
if (window.innerWidth <= 768) {
  menu.style.display = 'none';
}

// Hämta alla element som ska visas dynamiskt
const elements = document.querySelectorAll('.hidden');

// Funktion för att kontrollera om ett element är i vy
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Lägg till en event listener för scroll
const handleScroll = () => {
  elements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add('visible'); // Lägg till klassen "visible" när elementet är i vy
    }
  });
};

// Kör funktionen vid sidladdning och scroll
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
