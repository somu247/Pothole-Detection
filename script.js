document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.navbar-right ul li a');

    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            // Remove active class from all navigation items
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });

            // Add active class to the clicked navigation item
            this.classList.add('active');
        });
    });




    const imageContainer = document.querySelector('.sub-image-container');
    const animatedImage = document.getElementById('animatedImage');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedImage.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(imageContainer);



    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });



});
