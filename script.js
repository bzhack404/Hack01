function sub(){
 
    let finame=document.getElementById("i1").value;
    let laname=document.getElementById("i2").value;
    let phno=document.getElementById("i3").value;
    let email=document.getElementById("i4").value;
    let country=document.getElementById("i5").value;
    let role=document.getElementById("i6").value;
    let dob=document.getElementById("i7").value;
    let newpass=document.getElementById("i8").value;
    let confpass=document.getElementById("i9").value;
    let checkbox=document.getElementById("i10").value;
 let arr=[finame,laname,email,phno,country,role,dob,newpass,checkbox];
//     console.log(role);
//     if(finame.match(/^[a-zA-Z]+$/)){
//         document.getElementById("out").innerHTML=finame+"---true";
//     }else{
//         document.getElementById("out").innerHTML=finame+"---false";
//     }if(laname.match(/^[a-zA-Z]+$/){
//      document.getElementById("out").innerHTML=laname+"---true";
//     }else{
//      document.getElementById("out").innerHTML=laname+"---false";
//     }
    if(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        document.getElementById("out").innerHTML=email+"---valid";
    }else{
        document.getElementById("out").innerHTML=email+"---not valid";
    }

//     if(newpass==confpass){
//        document.getElementById("out").innerHTML="submited";
//     }else{
//      document.getElementById("out").innerHTML="can't submit";
//     }



document.getElementById("result").innerHTML=arr+"<br>";

} 
