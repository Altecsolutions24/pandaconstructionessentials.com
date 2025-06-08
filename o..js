  const toggleBtn = document.getElementById('toggleTextBtn');
  const extraContent = document.getElementById('extraTextContainer');

  toggleBtn.addEventListener('click', () => {
    extraContent.classList.toggle('show');
  });