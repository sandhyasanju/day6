  var data = [
    {
      "ID" : "1" ,
      "Name" : "Sandhya" ,
      "Age" : "20" ,
      "Salary" : "2000"
    },
    {
      "ID" : "2" ,
      "Name" : "Srija" ,
      "Age" : "20" ,
      "Salary" : "20000"
    },
    {
      "ID" : "3" ,
      "Name" : "Mrudula" ,
      "Age" : "21" ,
      "Salary" : "3200"
    },
    {
      "ID" : "4" ,
      "Name" : "Priyanka" ,
      "Age" : "22" ,
      "Salary" : "32000"
    },
    {
      "ID" : "5" ,
      "Name" : "Namratha" ,
      "Age" : "23" ,
      "Salary" : "2222"
    }
];
function create()
{
  var table = "<table id='table1' border = 1>" ;
  table += "<th id='th1' class = 'header' >" + "ID" + "<p onclick='increase(0)'>" +  "&#x025B4" + "</p>" + "<p onclick = 'decrease(0)'>" + "&#x025BE" + "</p>" + "</th>";
  table += "<th id='th2' class = 'header' '>" + "Name" + "<p onclick='increase(1)'>" +  "&#x025B4" + "</p>" + "<p onclick = 'decrease(1)'>" + "&#x025BE" + "</p>" + "</th>";
  table += "<th id='th3' clss = 'header' >" + "Age" + "<p onclick='increase(2)'>" +  "&#x025B4" + "</p>" + "<p onclick = 'decrease(2)'>" + "&#x025BE" + "</p>" + "</th>";
  table += "<th id='th4' class = 'header' >" + "Salary" + "<p onclick='increase(3)'>" +  "&#x025B4" + "</p>" + "<p onclick = 'decrease(3)'>" + "&#x025BE" + "</p>" + "</th>";
  table += "</th>";
  table += "<tbody id = 'tbody'>";
  for( var i = 0 ; i < data.length ; i++ )
  {
    table += "<tr class = 'tr'>";
    table += "<td id = 'td1'>" + data[i].ID + "</td>";
    table += "<td id = 'td2'>"  + data[i].Name + "</td>";
    table += "<td id = 'td3'>" + data[i].Age + "</td>";
    table += "<td id = 'td4'>" + data[i].Salary + "</td>";
    table += "</tr>";
    table += "</tbody>";
  }
  table += "</table>";
  var element = document.getElementById("div");
  element.innerHTML = table;
}

function increase(colid)
{
  var table = document.getElementById("table1");
  var row1 , row2 , temp , i , j ;
  for ( i = 1 ; i < table.rows.length ; i++ )
  {
    for ( j = 1 ; j < table.rows.length - 1 ; j ++ )
    {
      row1 = table.rows[j].cells[colid].innerHTML;
      row2 = table.rows[j+1].cells[colid].innerHTML;
      if ( row1 < row2 )
      {
        temp = table.rows[j].innerHTML ;
        table.rows[j].innerHTML = table.rows[j+1].innerHTML ;
        table.rows[j+1].innerHTML = temp ;
      }
    }
  }
}

function  decrease(colid)
{
  var table = document.getElementById("table1");
  var row1 , row2 , temp , i, j ;
  for ( i = 1 ; i < table.rows.length ; i++ )
  {
    for ( j = 1 ; j < table.rows.length - 1 ; j++ )
    {
      row1 = table.rows[j].cells[colid].innerHTML;
      row2 = table.rows[j+1].cells[colid].innerHTML;
      if ( row1 > row2 )
      {
        temp = table.rows[j].innerHTML;
        table.rows[j].innerHTML = table.rows[j+1].innerHTML;
        table.rows[j+1].innerHTML = temp ;
      }
    }
  }
}
function textfields()
{
  var input1 = document.createElement("input");
  input1.type = "text";
  input1.class = "text1";
  input1.id = "input1";
  var input2 = document.createElement("input");
  input2.type = "text";
  input2.class = "text1";
  input2.id = "input2";
  var input3 = document.createElement("input");
  input3.type = "text";
  input3.class = "text1";
  input3.id = "input3";
  var input4 = document.createElement("input");
  input4.type = "text";
  input4.class = "text1";
  input4.id = "input4";
  var table = document.getElementById("table1");
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  td1.appendChild(input1);
  td2.appendChild(input2);
  td3.appendChild(input3);
  td4.appendChild(input4);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  table.appendChild(tr);
  input1.addEventListener("keydown" , filter);
  input2.addEventListener("keydown" , filter);
  input3.addEventListener("keydown" , filter);
  input4.addEventListener("keydown" , filter);
  input1.removeEventListener("mouseout" , filter);
  input2.removeEventListener("mouseout" , filter);
  input3.removeEventListener("mouseout" , filter);
  input4.removeEventListener("mouseout" , filter);
}
function filter()
{
  var searchterm1 = document.getElementById("input1").value;
  var searchterm2 = document.getElementById("input2").value;
  var searchterm3 = document.getElementById("input3").value;
  var searchterm4 = document.getElementById("input4").value;
  var table = document.getElementById('table1');
  var r,c,row1;
  for( r = 1 ; r < table.rows.length ; r++ )
  {
    c = r;
    row1 = table.rows[r].cells[c].innerHTML;
    if ( searchterm1 === row1 || searchterm2 === row1 || searchterm3 === row1 || searchterm4 === row1 )
    {
      table.rows[r].style.display = "table-row";
    }
    else
    {
      table.rows[r].style.display = "none";
    }
  }
}
