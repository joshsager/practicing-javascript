let months = ["January", "February", "March"];

const add_btn = document.getElementById("add_btn");
const remove_btn = document.getElementById("remove_btn");
const month = document.getElementById("month");
const display = document.getElementById("display");

add_btn.addEventListener('click', add_to_list);
remove_btn.addEventListener('click', remove_from_list);

function add_to_list(event){
  months.push(month.value);
  update_display(months);
}

function remove_from_list(event){
  months.pop();
  update_display(months);
}

function update_display(list){
  display.innerHTML = "";
  let output = "";

  output += "<ul>";
  for (let i=0; i< list.length; i++){
    output += "<li>"+list[i]+"</li>";
  }
  output += "</ul>";

  display.innerHTML = output;
}

update_display(months);
