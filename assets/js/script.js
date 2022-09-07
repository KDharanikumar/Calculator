//////////////////////////

let container = createElement("div", "class", "container", "null", "", "null", "", "");
let row = createElement("div", "class", "row", "null", "", "null", "", "");
let col = createElement("div", "class", "col-sm-12 win", "null", "", "null", "", "");
let mainbox = createElement("div", "class", "mainbox", "null", "", "null", "", "");

let fg1 = createElement("div", "class", "form-group", "null", "", "null", "", "");
let inputVal = createElement("input", "type", "text", "class", "form-control text-end", "id", "outPutScreen");

let ul = createElement("ul", "class", "num-box", "null", "", "null", "", "");
let li1 = createElement("li", "class", "num", "onclick", "display('7')", "null", "", "7");
let li2 = createElement("li", "class", "num", "onclick", "display('8')", "null", "", "8");
let li3 = createElement("li", "class", "num", "onclick", "display('9')", "null", "", "9");
let li4 = createElement("li", "class", "num", "onclick", "display('+')", "null", "", "+");
let li5 = createElement("li", "class", "num", "onclick", "display('4')", "null", "", "4");
let li6 = createElement("li", "class", "num", "onclick", "display('5')", "null", "", "5");
let li7 = createElement("li", "class", "num", "onclick", "display('6')", "null", "", "6");
let li8 = createElement("li", "class", "num", "onclick", "display('-')", "null", "", "-");
let li9 = createElement("li", "class", "num", "onclick", "display('1')", "null", "", "1");
let li10 = createElement("li", "class", "num", "onclick", "display('2')", "null", "", "2");
let li11 = createElement("li", "class", "num", "onclick", "display('3')", "null", "", "3");
let li12 = createElement("li", "class", "num", "onclick", "display('*')", "null", "", "*");
let li13 = createElement("li", "class", "num", "onclick", "Clear()", "null", "", "c");
let li14 = createElement("li", "class", "num", "onclick", "display('0')", "null", "", "0");
let li15 = createElement("li", "class", "num", "onclick", "Calculate()", "null", "", "=");
let li16 = createElement("li", "class", "num", "onclick", "display('/')", "null", "", "/");

ul.append(li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11, li12, li13, li14, li15, li16);

fg1.append(inputVal);
mainbox.append(fg1, ul);
col.append(mainbox);
row.append(col);
container.append(row);
document.body.append(container);

let oScreen = document.getElementById("outPutScreen");

function display(num) {
  oScreen.value += num;
  return num;
}

function Calculate() {
  try {
    oScreen.value = eval(oScreen.value);
  } catch (error) {
    alert("Invalid Input");
  }
}

function Clear() {
  oScreen.value = "";
}

///////////////////////////////////////
function createElement(tagname, at1, atv1, at2, atv2, at3, atv3, content) {
  let element = document.createElement(tagname);
  element.setAttribute(at1, atv1);
  element.setAttribute(at2, atv2);
  element.setAttribute(at3, atv3);
  element.innerHTML = content;
  return element;
}
