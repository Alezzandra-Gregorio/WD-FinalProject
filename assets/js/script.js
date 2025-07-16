function pop() {
  const jump = document.getElementById('jump');
  const sound = document.getElementById('jade-sound');

  sound.currentTime = 0;
  sound.play().catch(err => {
    console.warn('Audio playback failed:', err);
  });

  jump.style.display = 'block';
  jump.classList.remove('animate');

  jump.classList.add('animate');

  setTimeout(() => {
    jump.style.display = 'none';
  }, 1500);
}
