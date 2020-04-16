var id=0;   
var validatedName=false;
var validatedAge=false;
var validatedPassword=false;
var indexToUpdate;
var records=[];
function Records(id,name,age,password){         //constructor of class Records
    this.id=id;
    this.name=name;
    this.age=age;
    this.password=password;
}
var name;
var age;
var password;
var idToUpdate="";
// var passwordPattern=new RegExp('((?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]){6,}');
var passwordPattern=new RegExp('([a-zA-Z]+[!@#$%^&*)(]+[0-9]+)|([a-zA-Z]+[0-9]+[!@#$%^&*)(]+)|([!@#$%^&*)(]+[a-zA-Z]+[0-9]+)|([!@#$%^&*)(]+[0-9]+[a-zA-Z]+)|([0-9]+[!@#$%^&*)(]+[a-zA-Z]+)|([0-9]+[a-zA-Z]+[!@#$%^&*)(]+)|([a-zA-Z]+[0-9]+[!@#$%^&*)(]+)');
$("#name").change(checkName);
$("#age").change(checkAge);
$("#password").change(checkPassword);
$("#submit").click(function(){    //onsubmit   
    checkName();    //Checking name
    checkAge();      //Checking age
    checkPassword(); //Checking password
    if(validatedAge==false || validatedName==false || validatedPassword==false){
        return;
    }
    if(idToUpdate==""){

    var tempRecord=new Records(id,name,age,password);
    records.push(tempRecord);
    printRecords();
    }
    else{
        updateRecord(name,age,password,idToUpdate);
    }
    id++;
});
function checkName(){       
    name=$("#name").val();                   //name validation
    if(name=="" || /^[a-zA-Z]*$/.test(name)==false){
        $("#name").css("border","1px solid red");
        window.alert("enter a vaild name");
        validatedName=false;
        return;
    }
    else{
        $("#name").css("border","1px solid black");
        validatedName=true;
    }
}
function checkAge(){ 
    age=$("#age").val();                        //age validation
    if(/^[0-9]{2}$/.test(age)==false){
        $("#age").css("border","1px solid red");
        window.alert("Wrong age Format");
        validatedAge=false;
        return;
    }else if(age>=18 && age<=60){
        $("#age").css("border","1px solid black");
        validatedAge=true;
    }
    else{
        window.alert("invaild Age");
        $("#age").css("border","1px solid red");
        validatedAge=false;
        return;
    }
}
function checkPassword(){               // password validation
    password=$("#Password").val();
    if(password.length<6){
        $("#Password").css("border","1px solid red");
        window.alert("Password length should be greater then 6");
        validatedPassword=false;
        return;
    }
    else if(passwordPattern.test(password)){
        $("#Password").css("border","1px solid black");
        validatedPassword=true;
        
    }
    else {
        $("#Password").css("border","1px solid red");
        window.alert("Password must contain one alphabet one numeric and one special symbol");
        validatedPassword=false;
        return;
    }
}
function updateRecord(name,age,password,idx){
    // console.log("idToUpdate="+idToUpdate);
    indexToUpdate=findIndex(Number(idx));
    // console.log("indexToUpdate="+indexToUpdate);
    records[indexToUpdate]['name']=name;
    records[indexToUpdate]['age']=age;
    records[indexToUpdate]['password']=password;
    idToUpdate="";
    printRecords();

}
function printRecords(){                    //printing records to table
    $("#result").html("");
    for(let i=0;i<records.length;i++){
    $("#result").append("<tr> <td>"+records[i]['name']+"</td><td>"+records[i]['age']+"</td><td>"+records[i]['password']+"</td><td><a href='#' onclick=deleteRecord('"+records[i]['id']+"')>delete</a>|<a href='#' onclick=editRecord('"+records[i]['id']+"')>edit</a></td></tr>");
    }
    $("#myform").trigger("reset"); 
}

function deleteRecord(id){                  // deleting a record
    for(let i=0;i<records.length;i++){
        if(records[i]['id']==id){
            records.splice(i,1);
            break;
        }
    }
    printRecords();
}
function editRecord(idx){                    //editing a record
    idToUpdate=idx;
    indexToUpdate=findIndex(idx);
    // console.log(indexToUpdate);
    $("#name").val(records[indexToUpdate]['name']);
    $("#age").val(records[indexToUpdate]['age']);
    $("#Password").val(records[indexToUpdate]['password']);
}
function findIndex(idx){                     // for finding index of a id
    // console.log(id);
    for(let i=0;i<records.length;i++){
        if(records[i]['id']==idx){
            return i;
        }
    }
}