let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');
window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {
        links.onmouseenter = () => {
            cursor1.classList.add('active');
            cursor2.classList.add('active');
        }
        links.onmouseleave = () => {
            cursor1.classList.remove('active');
            cursor2.classList.remove('active');
        }
    }

);

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.sidebar nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Basic animations on scroll
  const boxes = document.querySelectorAll('.box');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  boxes.forEach(box => {
    observer.observe(box);
  });
});

// CSS for animations
const style = document.createElement('style');
style.innerHTML = `
  .box.animate {
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .box {
    transform: translateY(20px);
    opacity: 0;
  }
`;
document.head.appendChild(style);