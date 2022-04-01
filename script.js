"use strict"
//Creating a button
var button=document.createElement("button");
button.addEventListener("click",foo);
button.innerHTML="click me";
document.body.append(button);

async function foo(){
    let res=document.getElementById("text").value;
    console.log(res);
    let result=await fetch(`https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane${res}`);
    let final=await result.json();
    console.log(final);
    for(var i=0;i<final.length;i++){
        for(var j=0;j<final[i].country.length;j++){
            let ele=document.createElement("div");
        ele.innerHTML=`name:${final[i].name}- country:${final[i].country[j].country_id }- probability:${final[i].country[j].probability}`;
        document.body.append(ele);
        }
        // let ele=document.createElement("div");
        // ele.innerHTML=`name:${final[i].name} country_id:${final[i].country_id}`;
        // document.body.append(ele);
    }
}