
// var logo1 = document.getElementById("logo")
// logo1.onclick =()=>{

// }


// pop-up ad code start 
const remove = document.getElementById("pop-up-ads")
const ads = document.getElementById("cross")
ads.onclick =()=>{
    // remove.classList.add("ads-none")
    remove.style.display = "none"
}
// pop-up ad code end 

// hamburgur code start 
const ham = document.getElementById("hamburgur")
const ham_nav = document.getElementById("ul-nav")
ham.onclick =()=>{
    ham_nav.classList.toggle("nav-active")
    // ham_nav.style.display = "flex"
}

const products0 = document.getElementById("products1")
const red0 = document.getElementById("redirect1")
const left0 = document.getElementById("left1")
const right0 = document.getElementById("right1")
let flag0=true;
products0.onclick =()=>{
    left0.classList.toggle("active-left0")
    right0.classList.remove("active-right0")
    if(flag0){
    products0.style.color = "#FA5C98"
    flag0=false;
    }
    else{
    products0.style.color = "#000000"
    flag0=true
    }
}
red0.onclick =()=>{
    right0.classList.toggle("active-right0")
    red0.style.color = "#FA5C98"
}



// hamburgur code end

// product navbar code start 
const products1 = document.getElementById("products")
const red1 = document.getElementById("redirect")
const left1 = document.getElementById("left")
const right1 = document.getElementById("right")
let flag=true;
products1.onclick =()=>{
    left1.classList.toggle("active-left")
    right1.classList.remove("active-right")
    if(flag){
    products1.style.color = "#FA5C98"
    flag=false;
    }
    else{
    products1.style.color = "#000000"
    flag=true
    }
}
red1.onclick =()=>{
    right1.classList.toggle("active-right")
    red1.style.color = "#FA5C98"
}
// product navbar code start 

// detailed section code start 
var small_1 = document.getElementById("left-img-1")
var small_2 = document.getElementById("left-img-2")
var small_3 = document.getElementById("left-img-3")
var small_4 = document.getElementById("left-img-4")
var main_img = document.getElementById("center-img")
small_1.onclick =()=>{
    main_img.src = small_1.src;
}
small_2.onclick =()=>{
    main_img.src = small_2.src;
}
small_3.onclick =()=>{
    main_img.src = small_3.src;
}
small_4.onclick =()=>{
    main_img.src = small_4.src;
}
// detailed section code end 

// purchase items code start 
var update1 = document.getElementById("update")
var add_item1 = document.getElementById("add-item")
var add_item2 = document.getElementById("add-cart")
var cancel1 = document.getElementById("cancel-item")
let x=1;
add_item1.onclick =()=>{
    update1.textContent = ++x
}
add_item2.onclick =()=>{
    update1.textContent = ++x
}
cancel1.onclick =()=>{

    if(x >= 1){
    update1.textContent = --x
    }
}


// purchase items code end 