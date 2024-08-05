document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion-button');
  let currentIndex = 0;

  buttons.forEach((button, index) => {
    button.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          currentIndex = (index + 1) % buttons.length;
          buttons[currentIndex].focus();
          break;
        case 'ArrowUp':
          event.preventDefault();
          currentIndex = (index - 1 + buttons.length) % buttons.length;
          buttons[currentIndex].focus();
          break;
        case 'Home':
          event.preventDefault();
          currentIndex = 0;
          buttons[currentIndex].focus();
          break;
        case 'End':
          event.preventDefault();
          currentIndex = buttons.length - 1;
          buttons[currentIndex].focus();
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          button.click();
          break;
      }
    });
  });
});
