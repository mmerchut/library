let myLibrary = [];
const addBtn = document.querySelector(".add");
const bookName = document.querySelector("#name");
const type = document.querySelector("#type");

function Book(name, type) {
  this.name = name;
  this.type = type;
  
}

function addBookToLibrary() {
  let x = new Book(bookName.value, type.value);
  myLibrary.push(x);
//   console.log(myLibrary[2])
  let app = document.querySelector('.shelf');
  let p = document.createElement("p")
  p.setAttribute("class", `'${x.name}'`);
    app.append(p);
    p.textContent = `name: ${x.name} type: ${x.type}`;
    
console.log(app.textContent);
}

addBtn.addEventListener('click', addBookToLibrary);