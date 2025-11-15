
console.log("Script cargado: Jardinería & Paisajismo");


const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
backToTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));


(function () {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        
        alert((document.documentElement.getAttribute('data-lang') === 'en') ? 'Form submitted (simulation)' : 'Formulario enviado (simulación)');
        form.reset();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();


document.querySelectorAll('#clearForm').forEach(btn => {
  btn.addEventListener('click', () => {
    const form = btn.closest('form');
    if (form) form.reset();
  });
});


const translations = {
  en: {
    "nav.home":"Home",
    "nav.services":"Services",
    "nav.projects":"Projects",
    "nav.contact":"Contact",
    "hero.title":"We design green spaces full of life",
    "hero.subtitle":"Tailored projects, maintenance and sustainable landscaping.",
    "hero.services":"See services",
    "hero.projects":"See projects",
    "services.title":"Our services",
    "services.more":"See service",
    "projects.title":"Real projects, happy clients",
    "projects.subtitle":"Real works in homes and corporate spaces.",
    "projects.view":"See more projects",
    "contact.title":"Contact us",
    "contact.name":"Name",
    "contact.phone":"Phone",
    "contact.email":"Email",
    "contact.message":"Message",
    "contact.send":"Send",
    "contact.clear":"Clear",
    "contact.infoTitle":"Contact details"
  },
  es: {
    "nav.home":"Inicio",
    "nav.services":"Servicios",
    "nav.projects":"Proyectos",
    "nav.contact":"Contacto",
    "hero.title":"Diseñamos espacios verdes con vida",
    "hero.subtitle":"Proyectos a medida, mantenimiento y paisajismo sostenible.",
    "hero.services":"Ver servicios",
    "hero.projects":"Ver proyectos",
    "services.title":"Nuestros servicios",
    "services.more":"Ver servicio",
    "projects.title":"Proyectos reales, clientes felices",
    "projects.subtitle":"Trabajos reales en residencias y espacios corporativos.",
    "projects.view":"Ver más proyectos",
    "contact.title":"Contáctanos",
    "contact.name":"Nombre",
    "contact.phone":"Teléfono",
    "contact.email":"Email",
    "contact.message":"Mensaje",
    "contact.send":"Enviar",
    "contact.clear":"Borrar",
    "contact.infoTitle":"Datos de contacto"
  }
};


const langSelect = document.getElementById('langToggle');
function setLanguage(lang){
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(node=>{
    const key = node.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]) node.textContent = translations[lang][key];
  });
}
if(langSelect){
  langSelect.value = document.documentElement.getAttribute('data-lang') || 'es';
  setLanguage(langSelect.value);
  langSelect.addEventListener('change', e => setLanguage(e.target.value));
}
