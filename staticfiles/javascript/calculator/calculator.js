var operends=[];                        //array for storing operands
var operator=[];                        //array for storing operators
var str="";                             //for storing inputs
var element="";                          
var i;
var result;                             //for storing result
var lb;   
function Data(data){                    //taking inputs from calculator
    result=0;
    document.getElementById("result").innerHTML="0";
    if(data=='+' || data=='/' || data=='*' || data=='-'){
        if(str[str.length-1]=='+' || str[str.length-1]=='/' || str[str.length-1]=='*' || str[str.length-1]=='-'){
            str = str.substr(0, str.length-1) + data;
            console.log(str);
            console.log(data);
            document.getElementById("display").innerHTML=str;
            
        }
        else{
            str+=data;
            document.getElementById("display").innerHTML=str;
        }
    }
    else{
    str+=data;
    console.log(str);
    document.getElementById("display").innerHTML=str;
    }
}

function calculate(){                           //function for calculation

    if(str[str.length-1]=='+' || str[str.length-1]=='/' || str[str.length-1]=='*' || str[str.length-1]=='-'){
        window.alert("invaild expression");
        return;
    }

    for(i=0;i<str.length;i++){                          //extracting operators and operands
        if(str[i]=='+' || str[i]=='/' || str[i]=='*' || str[i]=='-'){
            operends.push(Number(element));
            element="";
            lb=i;                                   //storing location of last operator
            operator.push(str[i]);
        }
        else{
            element+=str[i];
        }
    }
// validation if no opertor only operand we have
    if(operator.length==0){
        document.getElementById("result").innerHTML="="+str;
        return;
    }

    operends.push(Number(str.slice(lb+1,str.length)));


    element="";

    for(i=0;i<operator.length;i++){   //performing calculation
        let op1=operends[i];
        let op2=operends[i+1];
        switch(operator[i]){
            
                case '+':{                  
                           result=op1+op2 ;
                           operends[i+1]=result;       
                    break;
                }
                case '-':{                  
                        result=op1-op2 ;
                        operends[i+1]=result;       
                 break;
             }
                case '*':{                  
                        result=op1*op2 ;
                        operends[i+1]=result;       
                 break;
             }
                case '/':{    
                        if(op2==0){
                            window.alert("invaild expression");
                        }              
                        result=op1/op2 ;
                        operends[i+1]=result;       
                 break;
             }
    
        }
    }
    str="";
    operends=[];
    operator=[];
    document.getElementById("result").innerHTML="="+result;     //displaying result
}

function clean(){   //cleraing the everything
    str="";
    operends=[];
    document.getElementById("display").innerHTML="0";
    document.getElementById("result").innerHTML="0";

}
function cencel(){     //CENCEL any thing written
    str=str.slice(0,str.length-1);            
    document.getElementById("display").innerHTML=str;
}
