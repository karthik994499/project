function parse()
{
alert("hi");
var obj = JSON.parse('{ "name":"karthik", "age":18, "city":"madurai"}');
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
}
