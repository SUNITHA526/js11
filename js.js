
  
  let tags=document.querySelector("img")  //=> this is event binding
tags.style.borderRadius="100px"
 function image(){
  tags.src=`https://w0.peakpx.com/wallpaper/225/51/HD-wallpaper-d-boss-in-grey-formals-d-boss-grey-formals-actor-darshan-thoogudeepa.jpg`
  tags.style.borderRadius="50px"
}



function clickbtn(){
  let s=document.getElementById("but")      //=> this is inline binding
    let v=s.style.backgroundColor="red"; s.style.padding="50px"; s.style.fontSize="40px"; s.style.color="white";
    s.style.borderRadius="50%"; 
   }
  console.log(v)