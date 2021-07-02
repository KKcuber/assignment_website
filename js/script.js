document.getElementById("navbar").style.position = "fixed";
document.getElementById("navbar").style.top = "0";
document.getElementById("navbar").style.width = "100%";
function change(x) {
    x.style.backgroundColor="green";
};
function changeback(x) {
    x.style.backgroundColor="#333333";
}

var bgImage=['../images/image1.jpg','../images/image4.jpg','../images/image5.png',
            '../images/image2.png','../images/image3.jpg'];
var count=0;
var close=0;     
         
function nextImg(x){
         		count++;
         		if(count > bgImage.length -1) count=0;
         		x.style.backgroundImage="url("+bgImage[count]+")";
};       
        
function append() {
        // Get a reference to the table
        var newName=document.getElementById("myform").elements[0].value;
        var newSkill=document.getElementById("myform").elements[1].value;
        var newLevel=document.getElementById("myform").elements[2].value;
        var tableRef = document.getElementById("tableid");
        // Insert a row at the end of the table
        var newRow = tableRef.insertRow(-1);
        // Insert a cell in the row at index 0
        var newCell = [newRow.insertCell(0), newRow.insertCell(1), newRow.insertCell(2)];
        // Append a text node to the cell
        var newText = [document.createTextNode(newName), document.createTextNode(newSkill), document.createTextNode(newLevel)];
        var i;
        for(i=0;i<3;++i)
        newCell[i].appendChild(newText[i]);
        };