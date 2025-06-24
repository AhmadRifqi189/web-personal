    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');

    menuBtn.onclick = () => {
      sidebar.style.left = '0';
    };

    closeBtn.onclick = () => {
      sidebar.style.left = '-200px';
    };