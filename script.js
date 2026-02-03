const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
}, {});

const todoElements = document.querySelectorAll('.todo');

todoElements.forEach(item => observer.observe(item));

// const observer2 = new IntersectionObserver((entry) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             console.log(section3);
//         }
//     })
// }, {});

// const section3 = document.querySelectorAll('.section-3');

// observer2.forEach(item => observer.observe(section3));
