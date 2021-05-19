document.getElementById("noRow").innerHTML = "No Data";

function add() {
  document.getElementById("newRow").style.display = "table-row";
  document.getElementById("noRow").style.display = "none";
}

// let database = new Array();
function save() {
  document.getElementsByClassName("empty").value = " ";
  document.getElementById("newRow").style.display = "none";
  const kala = document.getElementById("kala");
  let option = kala.options[kala.selectedIndex].value;
  const info = document.getElementById("info").value;
  const unit = document.getElementById("unit").value;
  const number = document.getElementById("number").value;
  const price = document.getElementById("price").value;
  const off = document.getElementById("off").value;
  const tax = document.getElementById("tax").value;

  let x = parseInt(price);
  let y = parseInt(off);
  let z = parseInt(tax);

  let offR = (y * x) / 100;
  let x2 = number * x;
  let y2 = x2 - offR;
  let total = y2 + z;
  let table = document.getElementById("myTable");

  // const formData = new Object();

  // formData.option = option;
  // formData.info = info;
  // formData.unit = unit;
  // formData.number = number;
  // formData.price = price;
  // formData.off = off;
  // formData.tax = tax;
  // formData.total = total;

  // database.push(formData);
  // const mapping = database.map((obj, i) => {
  //   return `<tr>
  //           <th scope="row">${i + 1}</th>
  //           <td>${obj.option}</td>
  //           <td>${obj.info}</td>
  //           <td>${obj.unit}</td>
  //           <td>${obj.number}</td>
  //           <td>${obj.price}</td>
  //           <td>${obj.off}</td>
  //           <td>${obj.tax}</td>
  //           <td>${obj.total}</td>
  //           <td> <i class="fas fa-pen editIcon" onclick="edit()"></i>  <i class="fa fa-trash deleteIcone"  ></i></td>
  //       </tr>`;
  // });
  // document.getElementById("table-body").innerHTML = mapping.join("");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  let cell7 = row.insertCell(6);
  let cell8 = row.insertCell(7);
  let cell9 = row.insertCell(8);
  let cell10 = row.insertCell(9);

  let i = document.getElementById("myTable").rows.length;
  cell1.innerHTML = i - 2;
  cell2.innerHTML = option;
  cell3.innerHTML = info;
  cell4.innerHTML = unit;
  cell5.innerHTML = number;
  cell6.innerHTML = `${price} ریال`;
  cell7.innerHTML = `${offR} ریال`;
  cell8.innerHTML = tax;
  cell9.innerHTML = total;
  cell10.innerHTML =
    '<i class="fas fa-pen editIcon" onclick="edit()"></i>  <i class="fa fa-trash deleteIcone"  onclick="remove(`${i-2}`)"></i>';

  document.getElementById("totalPrice").innerHTML = `مبلغ کل ${total} ریال`;
  document.getElementById("totalTax").innerHTML = `مالیات کل ${tax} ریال`;
}

// function remove(key) {
//   console.log(key);
//   document.querySelector("row").deleteRow(key);
// }

// if (
//   option === "" ||
//   info === "" ||
//   unit === "" ||
//   number === "" ||
//   price === "" ||
//   off === "" ||
//   tax === ""
// ) {
//   alert("لطفا تمام فیلد ها را پر کنید");
// }
