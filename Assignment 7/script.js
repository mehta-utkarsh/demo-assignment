function addData() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var age = document.getElementById('age').value;
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var note = document.getElementById('note').value;
  var comment = document.getElementById('comment').value;

  let table = document.getElementById("foodTable");
  let row = table.insertRow(-1);
  var cell1 = row.insertCell(-1);
  var cell2 = row.insertCell(-1);
  var cell3 = row.insertCell(-1);
  var cell4 = row.insertCell(-1);
  var cell5 = row.insertCell(-1);
  var cell6 = row.insertCell(-1);
  var cell7 = row.insertCell(-1);
  var cell8 = row.insertCell(-1);
  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = age;
  cell4.innerHTML = a;
  cell5.innerHTML = b;
  cell6.innerHTML = note;
  cell7.innerHTML = comment;
  cell8.innerHTML = '<button id="btnEdit" style="background: crimson;color: #e4e4e4;box-shadow: #21262b 1px;" onclick="deleteRow(this)"> Delete </button>';

}
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}