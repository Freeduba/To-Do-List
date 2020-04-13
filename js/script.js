// Создаем кнопку "закрыть" и добавляем ее для каждого элемента в списке
var closeButton = document.getElementsByTagName("li");
var i;
for (i = 0; i < closeButton.length; i++) {
  var getSpan = document.createElement("span");
  var getText = document.createTextNode("\u00D7"); // Unicode character (multiplication sign)
  getSpan.className = "close";
  getSpan.appendChild(getText);
  closeButton[i].appendChild(getSpan);
}

// Кликаем на кнопку "закрыть" чтобы убрать данный элемент в списке
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Добавляем символ "выполнено" когда кликаем на элемент в списке
var checkedList = document.querySelector('ul');
var listSave;
function toLocal() {
  listSave = checkedList.innerHTML;
  localStorage.setItem('listSave', listSave);
}
checkedList.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    toLocal();
  }
}, false);

// Добавляем новый элемент в список

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  toLocal();

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

