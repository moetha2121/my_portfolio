// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');

//     menuToggle.addEventListener('change', function() {
//         if (this.checked) {
//             document.body.style.overflow = 'hidden';
//             document.body.style.touchAction = 'none'; // <--- Prevent two-finger scroll
//         } else {
//             document.body.style.overflow = '';
//             document.body.style.touchAction = '';
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');

    function lockScroll(apply) {
        if (window.innerWidth <= 700) { // Only apply on screens ≤ 700px
            if (apply) {
                document.body.style.overflow = 'hidden';
                document.body.style.touchAction = 'none';
            } else {
                document.body.style.overflow = '';
                document.body.style.touchAction = '';
            }
        } else {
            // If bigger than 700px, always reset (desktop should scroll normally)
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
    }

    menuToggle.addEventListener('change', function() {
        lockScroll(this.checked);
    });

    // Also fix behavior if user rotates phone or resizes
    window.addEventListener('resize', function() {
        lockScroll(menuToggle.checked);
    });
});

