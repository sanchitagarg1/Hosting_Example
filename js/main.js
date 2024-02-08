const wrapper=document.querySelector('.my_wrapper');
const indicators=[...document.querySelectorAll('.my_indicators button')];

let currentTestimonial=0;

indicators.forEach((item,i) => {
    item.addEventListener('click',()=>{
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft=`-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial=i;
    })
    
});



// if($('body').scrollTop() > 20){
//     // $('#demo').css('background-color','#007acc')

//     $("#nav_container").attr('class','container-fluid');
//     $(".my_header").css({"padding":"0","position":"fixed !important"});
// }
// if($('body').scrollTop() < 20){
//     $('#demo').css('background-color','transparent')
// }