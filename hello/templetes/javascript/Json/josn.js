var myobj;
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange =function(){
	if(this.readyState== 4 && this.status== 200){
		myobj=JSON.parse(this.responseText);
		// console.log(myobj);
	}
};
xhttp.open("GET",'http://dummy.restapiexample.com/api/v1/employees',true);
xhttp.send();
function showdata() {
	disableButton();
	for(let i=0;i<24;i++){
		document.getElementById("table").innerHTML+="<tr>";
		document.getElementById("table").innerHTML+="<td>"+myobj.data[i].id+"</td>"+"<td>"+myobj.data[i].employee_name+"</td>"+"<td>"+myobj.data[i].employee_salary+"</td>"+"<td>"+myobj.data[i].employee_age+"</td>";
		document.getElementById("table").innerHTML+="</tr>";
	}
	

	
	
}
function disableButton(){ 
	var s=document.getElementById("btn");
	s.disabled= true;
}

