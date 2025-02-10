document.addEventListener("DOMContentLoaded", function(){
    const passionSection = document.querySelector(".passion-section");

    function handleScroll(){
        const position = passionSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight * 0.5  ) {
            passionSection.style.opacity = "1";
            passionSection.style.transform = "translateY(0)";
        }
    }

    passionSection.style.opacity = "0";
    passionSection.style.transform = "translateY(50px)";
    passionSection.style.transition = "opacity 2s ease-out, transform 0.8s ease-out";

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});



document.addEventListener("DOMContentLoaded", function(){

    const passionAbout = document.querySelector(".about-section");
    
        function handleScroll(){
            const position = passionAbout.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (position < screenHeight * 0.8  ) {
                passionAbout.style.opacity = "1";
                passionAbout.style.transform = "translateY(0)";
            }
        }
    
        passionAbout.style.opacity = "0";
        passionAbout.style.transform = "translateY(50px)";
        passionAbout.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    });


    document.addEventListener("DOMContentLoaded", function(){

        const passionHeader = document.querySelector(".header-section");
        
            function handleScroll(){
                const position = passionHeader.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;
                if (position < screenHeight * 0.8  ) {
                    passionHeader.style.opacity = "1";
                    passionHeader.style.transform = "translateY(0)";
                }
            }
        
            passionHeader.style.opacity = "0";
            passionHeader.style.transform = "translateY(50px)";
            passionHeader.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        
            window.addEventListener("scroll", handleScroll);
            handleScroll();
        });

    
document.addEventListener("DOMContentLoaded", function(){
    const progressBar = document.querySelectorAll(".progress_bar");

    progressBar.forEach( bar=> {
        let progress = 0;
        const target = parseInt(bar.getAttribute("data-percentage"));
        
        const interval = setInterval(() =>{
            if (progress >= target) {
                clearInterval(interval);
            } else{
                progress += 1;
                bar.style.width = progress + "%";
                bar.textContent = progress + "%";
            }
        }, 30);
    });
});


const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnSvg = document.querySelector('svg')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
}