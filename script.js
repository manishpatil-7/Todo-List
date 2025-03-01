let tasks=[]
function add()
{
let temp=[]; 
temp.name=document.getElementById("name").value;
temp.priority=document.getElementById("priority").value;
tasks.push(temp);
tasks.sort(function(a,b){return a.priority-b.priority});
console.log(tasks);
document.getElementById('tasklist').innerHTML=''
    for(let i=0;i<tasks.length;i++)
    {
      let li=document.createElement('li')
      li.innerHTML=tasks[i]['name']
      document.getElementById('tasklist').appendChild(li)
    }



}