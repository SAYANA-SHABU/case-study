function getdata(){
    
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET"," https://jsonplaceholder.typicode.com/posts",true)

    xhttp.onreadystatechange = function(){
        console.log("done",xhttp.readyState);
        if(xhttp.readyState==4 && xhttp.status==200){
            // var data = this.responseText;
            var data = this.responseText;
            test(jfile);

        }
    }  
    xhttp.send()
}
  function test(data) {
    console.log(data)
    var list =JSON.parse(data);
    let output=`<thread>
    <tr>
    <th>Task</th>
    <th>Status</th>
    </tr>
    </thread>`
    for (let i = 0; i < list.length; i++){
        if (list[i].completed==true) {
            output +=`<tr><td>${list[i].title} </td><td><input class="form-check-input"  type=" checked="true" disabled="true" "></input></td></tr>` 
        } else {
            output +=`<tr><td>${list[i].title} </td><td><input class="form-check-input"  type="checkbox " onclick="val(this)" id="box"></input></td></tr>` 
        }
        document.getElementById("tab").innerHTML=output;
  }
  
}
count=0;
function val(c) {
    if (c.checked) {
        count++;
        displaymsg();
    } else {
       count--; 
    }
    
}
function displaymsg() {
    let promiseFn= new Promise(function(resolve,reject){
        if (count==5) {
         resolve("Congrats!!You have completed 5 tasks")   
        }
    }
    )
}