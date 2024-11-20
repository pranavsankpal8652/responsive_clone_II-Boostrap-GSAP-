
gsap.from('.header',{
    y:-200,
    duration:1,
    ease:'bounce'
    
})
document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.image', {
        x: 1000,
        duration: 2,
        scrollTrigger: {
            trigger: '#train_animator_point',
            start: 'bottom bottom'
        }
    });
});
