//Title constructor function that creates a Title object
var Table = document.getElementById("myTable");
var count=0;
function Title(t1) 
{ this.mytitle = t1;
}
function yellow(checkBox){
   var selectedRow=checkBox.parentElement.parentElement;
   var awdBtn=document.getElementById("button");
      
    if (checkBox.checked == true){
      count=count+1;
      selectedRow.style.backgroundColor ="yellow";
      var deleteBtn=document.createElement("td");
      deleteBtn.innerHTML= '<button id="deleted" type="button" onClick="onDelete(this)">Delete</button>';
      selectedRow.appendChild(deleteBtn);
      var editBtn=document.createElement("td");
      editBtn.innerHTML= '<button id="edited" type="button" onClick="onEdit(this)">Edit</button>';
      selectedRow.appendChild(editBtn);
      if(selectedRow.parentElement.firstElementChild.lastElementChild.innerHTML=='PERCENTAGE'){
      var deleteHead=document.createElement("th");
      deleteHead.innerHTML= 'DELETE';
      selectedRow.parentElement.firstElementChild.appendChild(deleteHead);
      var editHead=document.createElement("th");
      editHead.innerHTML= 'EDIT';
      selectedRow.parentElement.firstElementChild.appendChild(editHead);
      if(awdBtn.disabled==true){
      awdBtn.disabled=false;
      }
      }
    }  
    else {
      count=count-1;
      selectedRow.style.backgroundColor ="white";
      selectedRow.deleteCell(8);
      selectedRow.deleteCell(8);
      if(selectedRow.parentElement.firstElementChild.lastElementChild.innerHTML=='EDIT' && count==0){
        selectedRow.parentElement.firstElementChild.deleteCell(8);
        selectedRow.parentElement.firstElementChild.deleteCell(8);
        awdBtn.disabled=true;
      }

      }
  };
function onDelete(deleted){
  var selectedRow = deleted.parentElement.parentElement;
  var rowInd=selectedRow.rowIndex;
  var awdBtn=document.getElementById("button");
  var stuName=selectedRow.firstElementChild?.nextElementSibling?.innerHTML ||  "Student 0"
  var stuNum=stuName.split(" ")[1];
  selectedRow.parentElement.firstElementChild.deleteCell(8);
  selectedRow.parentElement.firstElementChild.deleteCell(8);
  Table.deleteRow(rowInd);
  Table.deleteRow(rowInd);
  if(awdBtn.disabled==false){
    awdBtn.disabled=true;
    }
  alert("Student "+parseInt(stuNum)+" has been deleted successfully");

}
function onEdit(edited){
  var selectedRow = edited.parentElement.parentElement;
  var rowInd=selectedRow.rowIndex;
  var awdBtn=document.getElementById("button");
  var stuName=selectedRow.firstElementChild?.nextElementSibling?.innerHTML ||  "Student 0"
  var stuNum=stuName.split(" ")[1];

  let a= window.prompt(" Update Student no. "+parseInt(stuNum));
  alert("student "+ parseInt(stuNum)+ " details have been updated to "+a);
}
function addNewStudent(){
  try{
  var stuName=Table.lastElementChild?.lastElementChild?.previousElementSibling?.firstElementChild?.nextElementSibling?.innerHTML ||  "Student 0"
  var stuNum=stuName.split(" ")[1];
  var studentRow=document.createElement('tr');
  var tdCBox=document.createElement('td');
  tdCBox.innerHTML='<input type="checkbox" for = "kbox" onClick="yellow(this)" /><br /><br /><img src="down.png" width="25px" />'
  var tdStuBox=document.createElement('td');
  tdStuBox.innerHTML='Student '+(parseInt(stuNum)+1)
  var tdAdvBox=document.createElement('td');
  tdAdvBox.innerHTML='Teacher '+(parseInt(stuNum)+1)
  var tdAwBox=document.createElement('td');
  tdAwBox.innerHTML='Approved'
  var tdSemBox=document.createElement('td');
  tdSemBox.innerHTML='Fall'
  var tdTypeBox=document.createElement('td');
  tdTypeBox.innerHTML='TA'
  var tdBudgBox=document.createElement('td');
  tdBudgBox.innerHTML=Math.floor(Math.random() * 90000) + 10000;
  var tdPerBox=document.createElement('td');
  tdPerBox.innerHTML='100%'

  var awdRow=document.createElement('tr');
  awdRow.innerHTML='<tr><td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td></tr>';
  awdRow.style.display="none";
  awdRow.className="dropDownTextArea";
    Table.lastElementChild.appendChild(studentRow);


  studentRow.appendChild(tdCBox);
  studentRow.appendChild(tdStuBox);
  studentRow.appendChild(tdAdvBox);
  studentRow.appendChild(tdAwBox);
  studentRow.appendChild(tdSemBox);
  studentRow.appendChild(tdTypeBox);
  studentRow.appendChild(tdBudgBox);
  studentRow.appendChild(tdPerBox);
  Table.lastElementChild.appendChild(awdRow);

  alert("Student "+(parseInt(stuNum)+ 1 )+" has been added successfully");
  }
  catch(e) {
    alert("Error while adding seletedRow new record. Please Try again.");
  }
}

Table.addEventListener("click", function (event) {
  // Check if the clicked element is an <img> element
  if (event.target.tagName === "IMG") {
    var x = event.target.parentElement.parentElement.nextElementSibling.className;
    if (x == "dropDownTextArea") {
      if (event.target.parentElement.parentElement.nextElementSibling.style.display == 'none') {
        console.log("HI, 1");
        event.target.parentElement.parentElement.nextElementSibling.style.display = '';
      } else {
        event.target.parentElement.parentElement.nextElementSibling.style.display = 'none';
        console.log("HI, 2");
      }
    }
  }
});


Title.prototype.getName = function () 
{ 
return (this.mytitle);
}
