console.log("Learning AJAX");


    // <button type="button" class="btn btn-primary" id="Fetch Data">Fetch Data</button>
let FetchData =    document.getElementById('FetchData')
FetchData.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    // console.log('You have clicked the FetchData Button.')
    // //Instantiate an xhr object
    // const xhr = new XMLHttpRequest();

    // //open the object
    // // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
   
    // //POST REQUEST
    // xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    // xhr.getResponseHeader('Content-type','application/json')
    // //what to do on progress(optional)
    // xhr.onprogress = function(){
    //     console.log('On Progress');
    // }

    // //what to do when response is ready
    // xhr.onload = function(){
    //     if(this.status === 200){
    //         console.log(this.responseText)
        
    //     }
    //     else{
    //         console.log("Some error ho gaya") 
    //     }
    // }
    // //send the request
    // params = {"name":"test238","salary":"123","age":"23"}
    // xhr.send(params);

    // console.log("We are done")

}


    let POPULATE = document.getElementById("POPULATE");
    POPULATE.addEventListener('click',popHandler)

    function popHandler(){
        console.log('You have clicked the POPHANDLER Button.')
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

  //what to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            let obj = JSON.parse(this.responseText)
            console.log(obj)
        }
        else{
            console.log("Some error ho gaya") 
        }
    }
    //send the request
    xhr.send();

    console.log("We are done")

}


}
