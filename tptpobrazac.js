function toggleBar(clickedBar) {
        // Toggle the clicked bar without closing others
        clickedBar.classList.toggle('active');
        const content = clickedBar.nextElementSibling;
        if (clickedBar.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    }