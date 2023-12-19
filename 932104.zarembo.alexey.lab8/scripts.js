function AddRow()
{
    var row = document.querySelector(".row").cloneNode(true);
    var table = document.querySelector("#table");
    table.appendChild(row);
}

function DeleteRow(button) 
{
    button.parentElement.remove();
}

function MoveUp(button) {
    let a = button.parentElement.previousElementSibling;
    if (a)
    {
        button.parentElement.after(a);
    }
}

function MoveDown(button) {
    let a = button.parentElement.nextElementSibling;
    if(a)
    {
        button.parentElement.before(a);
    }
}

function Save() {
    let i1 = document.querySelectorAll(".input1");
    let i2 = document.querySelectorAll(".input2");

    var a = []
    for (var i = 1; i < i1.length; i++)        
    {
        a.push(i1[i].value + " : " + i2[i].value);
    }
    a = JSON.stringify(a);
    a = '{' + a.slice(1, a.length - 1) + '}';   

    let outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = a;
}
