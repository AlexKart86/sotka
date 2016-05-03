var xmlhttp = new XMLHttpRequest();
var url = "http://api.velorally.ua/sport_events.getParticipants";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4)
	{  if (xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);		
	   }
	   else
	   {
		alert(xmlhttp.status + ': ' + xmlhttp.statusText );   
	   }
    }	
};

var body = "event_id=1&count=5000&access_key=";
//var body="";

xmlhttp.open("POST", url, true);
xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
xmlhttp.send(body);


function myFunction(arr) {
    var out = "";
	var i;
    var cnt = arr.response.count;
	var resp = arr.response.items;
	
    for(i = 0; i < cnt; i++) {
        out += resp[i].first_name + '<br>';
    }
    document.getElementById("id01").innerHTML = out;
}