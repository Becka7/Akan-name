function myFunction() {
    var birthday=parseInt(document.getElementById("birthdate").value);
    if(birthday.toString().length >2 || birthday.toString()>31){
        alert("Please enter a valid day")
    }
    var birthmonth= parseInt(document.getElementById("birthmonth").value);
    if(birthmonth.toString()>12 ){
        alert("Please enter a valid month")
    }
    var birthyear= parseInt(document.getElementById("birthyear").value);
    if(birthyear.toString().length !== 4){
        alert("Please enter a valid year")
    }
    var d = new Date( birthyear,birthmonth,birthday);
    var n = d.getDay();

    

    

    var femaleAkans=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleAkans=["Kwasi","Kwado" ,"Kwabena ","Kwaku","Yaw" ,"Kofi","Kwame"];

    // document.getElementById("akonName").innerHTML = femaleAkans[n];
    // document.getElementById("akonName").innerHTML = maleAkans[n];
    if(document.getElementById("male").checked){
        // alert("BECCCAAA")
        document.getElementById("akonName").innerHTML = maleAkans[n];

    }else if(document.getElementById("female").checked){
        // alert("HEEYYY")
        document.getElementById("akonName").innerHTML = femaleAkans[n];

    }
    else{
       alert("Please select your gender");
    }
    // else if(document.getElementById("male").notchecked && document.getElementById("female").notchecked){
    //     alert("You can only check one")
    // }
}
// function validateForm(){
//     var b= (document.forms[birthForm].[birthdate].value);
//     if(b==""){
//     alert("please enter valid year")
// }
// }


    // document.getElementById("akonName").innerHTML = n;

    // var male = document.querySelector('input[name="male"]:checked').value;
    // var female = document.querySelector('input[name="female"]:checked').value;

    // var female=document.getElementById("female").value;
    
    // var maleAkans=[Kwasi,Kwado ,Kwabena ,Kwaku,Yaw ,Kofi,Kwame];

    // var femaleAkans=[Akosua,Adwoa,Abenaa,Akua,Yaa,Afua,Ama];

    // var gen=(document.getElementById("gender"));
    
    // if(gen =="male"){
    //     alert("here");
    // }






//     if(document.getElementById("male").checked){
//         alert("here")
//         document.getElementById("akonName").innerHTML = femaleAkans[n];
//     }else if(document.getElementById("Female").checked){
//         alert("here")
//         document.getElementById("akonName").innerHTML = maleAkans[n];
//     }

   


// // }
// // myFunction()
// function validateForm(){
//     var x=document.forms["birthForm"]["birthdate"].value;
//     if(x==""){
//         alert("field must be filled");
//         return false;
//     }
// }