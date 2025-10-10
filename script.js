// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapaButton');

// 2. Tombohkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click', function() {
    // 3. Jalankan kode ini ketika tombol di-klik
    alert('Terima kasih masih sayang aku!');
});

const startButton = document.getElementById('start-button');
const menuContainer = document.querySelector('.menu-container');

startButton.addEventListener('click', () => {
  // Menambah atau menghapus kelas 'active'
  menuContainer.classList.toggle('active');
});
