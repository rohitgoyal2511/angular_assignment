window.onload = function() {
    var input = document.getElementById("ip");
    var btn = document.getElementById("btn");

    btn.onclick = function () {
        var value = input.value;
        console.log(value);
        addItem(value);
        display();
    };


}
function complete(id, value) {
    var parent = document.getElementById(id).parentNode.parentNode;
    console.log(value);
    parent.removeChild(document.getElementById(id).parentNode);

    var div_row1 = document.createElement("div");
    div_row1.setAttribute("id", "can_remove");
    var html = "";
     html = `<h2>${value}</h2> &nbsp; &nbsp; &nbsp; 
                <button type = 'button' class='btn btn-outline-danger' id = "delete_id" onclick= 'deleted(this.id , "${value}")'>delete</button><br><br><br>`
    div_row1.innerHTML = html;
    div_row1.setAttribute("class", "complete_div col-sm-12");
    document.getElementById("complete_div").appendChild(div_row1);
}

function deleted(id, value) {
    var parent = document.getElementById(id).parentNode.parentNode;
    console.log(value);
    parent.removeChild(document.getElementById(id).parentNode);

    var div_row1 = document.createElement("div");
    div_row1.setAttribute("id", "can_remove");
    var html = "";
    html = `<h2><strike class = "strike">${value}</strike></h2><hr>`
    div_row1.innerHTML = html;
    div_row1.setAttribute("class", "delete_div col-sm-12");
    document.getElementById("delete_div").appendChild(div_row1);
}

function update(id , value) {
    var updated_value = window.prompt("Enter updated value", value);
    if(updated_value == null || updated_value == "") {
        alert("Todo is not updated");
    }
    else{
        document.getElementById(id).parentNode.childNodes[0].innerHTML = updated_value;
    }
}