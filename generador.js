document.getElementById('generate-btn').onclick = function() {
  const text = encodeURIComponent(document.getElementById('dedication-text').value);
  const start = document.getElementById('start-date').value;
  const eventDate = document.getElementById('event-date').value;
  const firma = encodeURIComponent(document.getElementById('firma').value);
  // Cambia TU_USUARIO por tu usuario real de GitHub
  let url = `https://github.com/Norza701/Periquito.git/?text=${text}&start=${start}&event=${eventDate}`;
  if (firma && firma !== "") url += `&firma=${firma}`;
  document.getElementById('result-url').value = url;
};

document.getElementById('copy-btn').onclick = function() {
  const input = document.getElementById('result-url');
  input.select();
  input.setSelectionRange(0, 99999);
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (e) {
    copied = false;
  }
  const btn = document.getElementById('copy-btn');
  if (copied) {
    btn.textContent = 'Copiado';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Copiar';
      btn.disabled = false;
    }, 1500);
  }
};
