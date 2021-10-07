var opened = false;
function openNav() {
  if (opened==true){
    document.getElementById("top-head").style.width = "0%";
  }else{
    opened = true;
    document.getElementById("top-head").style.width = "20%";
  }
}
function closeNav() {
  document.getElementById("top-head").style.width = "0%";
  opened = false;
}
class Product{
  constructor(id){
    this.id=id;
  }
}