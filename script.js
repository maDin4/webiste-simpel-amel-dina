// Mengubah link navigasi yang aktif saat diklik
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav .active').classList.remove('active');
        this.classList.add('active');
    });
});
