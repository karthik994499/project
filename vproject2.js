function parse()
{
alert ("welcome to all");
  var obj = JSON.parse('{"address":  ["kln college of engineering","paramakudi","virtualgodown chennai"], "games": "badminton", "email":[ "karthik994499@gamail.com","karthik994499@virtualgodown.com"] } ')
  document.getElementById("demo").innerHTML =  obj.address[1] + "," + obj.games + "," + obj.email[1]
}
