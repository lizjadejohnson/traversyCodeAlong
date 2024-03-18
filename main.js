const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

//Creating event listener for on submit://
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault(); //Prevent the default action//

  //If the name or email is empty...//
  if (nameInput.value === "" || emailInput.value === "") {
    // alert("please enter fields");     The standard alert is a little ugly! //
    msg.classList.add("error"); //Add the CSS class called 'error' to style our custom alert
    msg.innerHTML = "Please enter all fields"; //Custom alert text

    setTimeout(() => msg.remove(), 3000); //Make the error message go away after 3 secs
  } else {
    const li = document.createElement("li"); //Create a list item
    li.appendChild(
      document.createTextNode(`$ {nameInput.value} : ${emailInput.value}`) //Texts of the name and email vlaues
    );
    userList.appendChild(li); //Actually appends the above new list item to the list
    //Clear fields:
    nameInput.value = "";
    emailInput.value = "";
  }
}
