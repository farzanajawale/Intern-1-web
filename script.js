const inputBox = document.getElementById("input-info");
const listContent = document.getElementById("list-con");

function addTask() {
    if(inputBox.value === ''){
        alert("Please enter your task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContent.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContent.addEventListener("click", function(p){
    if (p.target.tagName === "LI") {
        p.target.classList.toggle("checked");
        saveData();
    }
    else if(p.target.tagName === "SPAN"){
        p.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContent.innerHTML);
}