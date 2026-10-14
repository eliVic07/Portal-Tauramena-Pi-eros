document.querySelectorAll('#filtros button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#filtros button').forEach(x => { x.classList.remove('btn-success'); x.classList.add('btn-outline-success'); });
  b.classList.replace('btn-outline-success', 'btn-success');
  document.querySelectorAll('.sitio').forEach(s => s.style.display = (b.dataset.f === 'todos' || s.dataset.cat === b.dataset.f) ? '' : 'none');
}));

const modalFoto = document.getElementById('modalFoto');
if (modalFoto) modalFoto.addEventListener('show.bs.modal', e => {
  const a = e.relatedTarget;
  document.getElementById('modalImg').src = a.dataset.src;
  document.getElementById('modalImg').alt = a.dataset.alt;
  document.getElementById('modalTitulo').textContent = a.dataset.alt;
});

const form = document.getElementById('formContacto');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
  bootstrap.Toast.getOrCreateInstance(document.getElementById('toastOk')).show();
  form.reset(); form.classList.remove('was-validated');
});

const arriba = document.getElementById('arriba');
window.addEventListener('scroll', () => arriba.classList.toggle('visible', window.scrollY > 400));

const barra = document.getElementById('barra');
const cambiarBarra = () => barra.classList.toggle('arriba', window.scrollY <= 60);
window.addEventListener('scroll', cambiarBarra); cambiarBarra();

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

const io = new IntersectionObserver(entradas => entradas.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
}), { threshold: .15 });
document.querySelectorAll('.card, .hito, .col-md-6 > .feature-icon, #economia .col-md-4, .accordion').forEach(el => { el.classList.add('reveal'); io.observe(el); });
