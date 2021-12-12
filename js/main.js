 


// /*------------------------------------
// testimonial slider
// ---------------------------------*/
function testimonialslider(){
    const carouselone = document.getElementById('carouselone');
if(carouselone){
    carouselone.addEventListener('slide.bs.carousel', function () {
        const activeitem = this.querySelector(".active");
       document.querySelector(".js-testimonial-img").src=activeitem.getAttribute("data-js-testimoni-img");

      })
}
     
}
testimonialslider();






// course preview video

function coursePrevievideo(){
    const coursePrevieModa1 = document.querySelector(".js-course-preview-model");
    if(coursePrevieModa1){
    coursePrevieModa1.addEventListener( "shown-bs.modal",function(){
        this.querySe1ector( ".js-course-preview-video" ). play() ;
        this.querySe1ector(" .js-course-preview-video") .currentTime=0;
    });
    
    coursePrevieModa1.addEventListener("hide.bs.modal", function() {
    this.querySe1ector(".js-course-preview-video").pause() ;
    });
}
}
    coursePrevievideo();


// //header menu

function headerMenu(){
  const menu = document.querySelector(".js-header-menu"),
   backdrop = document.querySelector(".js-header-backdrop"),
   menuCollapseBreakpoint = 991;
   

    function toggleMenu(){
       menu.classList.toggle("open");
       backdrop.classList.toggle("active");
       document.body.classList.toggle("overflow-hidden");
    }
    
    document.querySelectorAll(".js-header-menu-toggler").forEach((item) =>{
        item.addEventListener("click", toggleMenu);
    });

     

   function collapse(){
       menu.querySelector(".active .js-sub-menu").removeAttribute("style");
       menu.querySelector(".active").classList.remove("active");

   }


   menu.addEventListener("click", (event) =>{
    const { target } = event;
      
    if(target.classList.contains("js-toggle-sub-menu") && window.innerWidth <= menuCollapseBreakpoint){
        event.preventDefault();
          
        if(target.parentElement.classList.contains("active")){
            collapse();
            return;
        }



        if(menu.querySelector(".active")){
            collapse();
        }
        target.parentElement.classList.add("active");
        target.nextElementSibling.style.maxHeight=
        target.nextElementSibling.scrollHeight + "px";
    }
   });
}
headerMenu();


 
//when resizing window


window.addEventListener("resize",function() {
   if(this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")){
       toggleMenu();
   }
   if(this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")){
       collapse();
   }
});



// style switcher

function styleSwitcherToggle(){
    const styleSwitcher =document.querySelector(".js-style-switcher"),
    styleSwitcherToggle =document.querySelector(".js-style-switcher-toggler");

    styleSwitcherToggle.addEventListener("click",function(){
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times");
        this.querySelector("i").classList.toggle("fa-cog");
    });
}

styleSwitcherToggle();


//theme colors

function themeColors(){
   const colorStyle = document.querySelector(".js-color-style");
   themeColorsContainer = document.querySelector(".js-theme-colors");

   themeColorsContainer.addEventListener("click",({target}) =>{
            if(target.classList.contains("js-theme-color-item")){
                localStorage.setItem("color",target.getAttribute("data-js-theme-color"));
                setColor();
            }
   });
   function setColor(){
       let path = colorStyle.getAttribute("href").split("/");
       path = path.slice(0, path.length-1);
       colorStyle.setAttribute("href",path.join("/") + "/" + localStorage.getItem("color")+".css");
       if(document.querySelector(".js-theme-color-item.active")){
           document.querySelector(".js-theme-color-item.active").classList.remove("active");

       }
       document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
   }
   if(localStorage.getItem("color") !==null){
       setColor();
   }
   else{
       const defaultColor = document.getAttribute("href").split("/").pop().split(".").shift();
       document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active");
   }
}
themeColors();





//dark mode and light

function themeLightDark(){
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    darkModeCheckbox.addEventListener("click", function(){
       if(this.checked){
           localStorage.setItem("theme-dark", "true");
       }
       else{
           localStorage.setItem("theme-dark","false");
       }
       themeMode();
    });
    function themeMode(){
         
              if(localStorage.getItem("theme-dark") == "false"){
                  document.body.classList.remove("t-dark");
              }
              else{
                  document.body.classList.add("t-dark");
              }
        
         
    }
    if(localStorage.getItem("theme-dark")!==null){
        themeMode();
    }
    if(document.body.classList.contains("t-dark")){
        darkModeCheckbox.checked = true;
    }
}
themeLightDark();





// theme glass effect

function themeGlassEffect(){
    const glassEffectCheckBox=document.querySelector(".js-glass-effect");
    glassStyle=document.querySelector(".js-glass-style");

    glassEffectCheckBox.addEventListener("click", function(){
        if(this.checked){
            localStorage.setItem("glass-effect","true");
        }
        else{
            localStorage.setItem("glass-effect","false");
        }
        glass();
    });
    function glass(){
        if(localStorage.getItem("glass-effect")=="true"){
            glassStyle.removeAttribute("disabled");
        }
        else{
            glassStyle.disabled=true;
        }
    }
    if(localStorage.getItem("glass-effect")!==null){
        glass();
    }
    if(!glassStyle.hasAttribute("disabled")){
        glassEffectCheckBox.checked=true;
    }
}

themeGlassEffect();



















