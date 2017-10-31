var shoppingList = /** @class */ (function () {
    function shoppingList(item) {
        this.items = item;
    }
    shoppingList.prototype.add = function (list) {
        this.items.push(list.item);
    };
    shoppingList.prototype.store = function () {
     //   localStorage.clear();
        localStorage.setItem("list_data_key",  JSON.stringify(this.items));
    };

    shoppingList.prototype.display = function () {
        var storedData = localStorage.getItem("list_data_key");

        if (storedData) {
            var ArrayData = JSON.parse(storedData);
        }
        else
            ArrayData = [];

        var div_row1 = document.createElement("div");
        div_row1.setAttribute("id", "can_remove");
        div_row1.setAttribute("class", "active_div col-sm-12");
        var html = "";

        for(var i = 0; i < ArrayData.length ; i++){
            var header = 'header_'+i;
            var active = 'active_'+i;
            var update = 'update_' + i;
            var complete = 'complete_' + i;
            var delete_id = 'delete_' + i ;
            var html = `<h2>${ArrayData[i]}</h2> &nbsp; &nbsp; &nbsp; 
                <button type = 'button' class='btn btn-outline-warning' id= "${update}" onclick= 'update(this.id , "${ArrayData[i]}")'>update</button>&nbsp; &nbsp; &nbsp; &nbsp;
                 <button type = 'button' class='btn btn-outline-success' id= "${complete}" onclick= 'complete(this.id , "${ArrayData[i]}")'>complete</button>&nbsp; &nbsp; &nbsp; &nbsp;
                <button type = 'button' class='btn btn-outline-danger' id= "${delete_id}" onclick= 'deleted(this.id, "${ArrayData[i]}")'>delete</button><br><br><br>`

              div_row1.innerHTML = html;
              html = "";
        }

        document.getElementById("active_div").appendChild(div_row1);
    }
return shoppingList;
}());

var shoppinglist = new shoppingList(["item1"]);

function addItem(item) {
    shoppinglist.add({
        item: item
    });
    shoppinglist.store();
}
function display() {
  shoppinglist.display();
}


