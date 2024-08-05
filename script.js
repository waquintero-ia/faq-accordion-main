document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
          const content = button.nextElementSibling;
          const icon = button.querySelector('.icon-plus-minus');

          accordionButtons.forEach(btn => {
              const otherContent = btn.nextElementSibling;
              const otherIcon = btn.querySelector('.icon-plus-minus');

              if (otherContent !== content) {
                  otherContent.classList.remove('open');
                  otherIcon.src = './assets/images/icon-plus.svg';
              }
          });

          if (content.classList.contains('open')) {
              content.classList.remove('open');
              icon.src = './assets/images/icon-plus.svg';
          } else {
              content.classList.add('open');
              icon.src = './assets/images/icon-minus.svg';
          }
      });
  });
});
