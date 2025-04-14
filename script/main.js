function mostrarTexto(id) {
    document.querySelectorAll('.text-box').forEach(el => el.style.display = 'none');
    document.getElementById(id).style.display = 'block';
  }
  