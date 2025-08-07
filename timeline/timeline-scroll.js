// timeline-scroll.js
document.addEventListener('DOMContentLoaded', () => {
  const bar    = document.querySelector('.timeline-bar');
  const active = document.querySelector('.timeline-event.active');
  if (!bar || !active) return;

  /* move the bar so the active button is centred */
  const offset =
    active.offsetLeft - (bar.clientWidth / 2) + (active.clientWidth / 2);

  bar.scrollTo({ left: offset, behavior: 'instant' }); // or 'auto'
});

// store position right before navigating away
document.querySelectorAll('.timeline-event').forEach(link => {
  link.addEventListener('click', () => {
    sessionStorage.setItem('timelineScroll', bar.scrollLeft);
  });
});

// restore on the next page
const saved = sessionStorage.getItem('timelineScroll');
if (saved !== null) bar.scrollLeft = parseInt(saved, 10);