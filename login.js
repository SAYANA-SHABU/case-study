let username = document.getElementById("username");
let password = document.getElementById("password");
function validate(callback) {
    console.log(username.value);
    console.log(password.value);
if (username.value.trim() == "admin" && password.value.trim() == "12345") {
    
 callback()
                                                                                                                                                                                                                                                                               
    }
else{
    alert(" Wrong Username and password");
    return false;
}
}
function redirect() {
    console.log("redirect");
    return true}

// function ajaxcall(){
//     var xhttp= new XMLHttpRequest()
//     xhttp.open('GET','https://jsonplaceholder.typicode.com/posts',true)
//     xhttp.send()
//     xhttp.onreadystatechange = function(){
//         let promise = new Promise((resolve,reject)=>{
          
//         })
//         promise.then((val)=>{
            
//         })
//        }
// }
// ajaxcall()