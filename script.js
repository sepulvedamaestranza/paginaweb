document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad de filtro de galería
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.galeria-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === '*' || item.classList.contains(filter.replace('.', ''))) {
                    item.style.display = 'block'; // Corregido de 'bloquear' a 'block'
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
