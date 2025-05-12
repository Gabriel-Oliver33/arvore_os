document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.os-node');
  
    nodes.forEach(node => {
      node.addEventListener('click', (e) => {
        e.stopPropagation();
        const li = node.closest('li');
        if (li) {
          li.classList.toggle('open');
        }
      });
    });
  });
  