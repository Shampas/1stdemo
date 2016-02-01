//get html element
var cat_img = document.getElementById("cat_img");
var feed_button =document.getElementById("feed_button");
//add an event listener
cat_img.addEventListener("click", meow);

// feed_button.addEventListener("click", function(){
// 	alert("oof");
// });

feed_button.addEventListener("click",feed);
function meow()
{
	alert("Meow");
}
console.log(55+'5');
//manipulate html element
function feed()
{
	cat_img.style.width=(cat_img.offsetWidth + 30.0) +'px';
}