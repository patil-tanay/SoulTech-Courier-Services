const counters= document.querySelectorAll('.count');
const speed= 100;

counters.forEach(counter =>{
    const updateCounter =()=>{
        const target = +counter.getAttribute('data-target');
        const counts = +counter.innerText;
        const inc = target/speed;

        if(counts < target){
            counter.innerText = counts+inc;
            setTimeout(updateCounter,1);

        } else{
            counts.innerText = target;
        }
    }
    updateCounter();
});

//---------------------------------------------------
myButton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 25 || document.documentElement.scrollTop > 25 ){
        myButton.style.display = "block";

    } else {
        myButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;  //for safari
    document.documentElement.scrollTop = 0;  // for other browsers
}