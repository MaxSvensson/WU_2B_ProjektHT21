

const windowTop = window.screenTop;
window.addEventListener("scroll", () => {
    var picturesSection = document.getElementById('pictures');
    var distanceToTop = picturesSection.getBoundingClientRect().top;
    console.log(distanceToTop)
    // console.log(section1.screenTop - windowTop)
})