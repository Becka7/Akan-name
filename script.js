function myFunction() {
    // alert("Here")
    var birthday=parseInt(document.getElementById("birthdate").value);
    var birthmonth= parseInt(document.getElementById("birthmonth").value);
    var birthyear= parseInt(document.getElementById("birthyear").value);
    var d = new Date( birthyear,birthmonth,birthday);
    var n = d.getDay();

    // var femaleAkans=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    // document.getElementById("akonName").innerHTML = femaleAkans[n];



    // document.getElementById("akonName").innerHTML = n;

    // var male = document.querySelector('input[name="male"]:checked').value;
    // var female = document.querySelector('input[name="female"]:checked').value;

    // var female=document.getElementById("female").value;
    
    var maleAkans=[Kwasi,Kwado ,Kwabena ,Kwaku,Yaw ,Kofi,Kwame];

    var femaleAkans=[Akosua,Adwoa,Abenaa,Akua,Yaa,Afua,Ama];

    // var gen=(document.getElementById("gender"));
    
    // if(gen =="male"){
    //     alert("here");
    // }

    if(document.getElementById("male").checked){
        alert("here")
        document.getElementById("akonName").innerHTML = femaleAkans[n];
    }else if(document.getElementById("Female").checked){
        alert("here")
        document.getElementById("akonName").innerHTML = maleAkans[n];
    }

   


// }
// myFunction()
function validateForm(){
    var x=document.forms["birthForm"]["birthdate"].value;
    if(x==""){
        alert("field must be filled");
        return false;
    }
}