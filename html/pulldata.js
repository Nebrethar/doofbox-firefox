document.getElementById("subauth").addEventListener("click", function(){
  const token = document.getElementById("oauth").value
  const user = document.getElementById("user").value
  console.log("SUBMITTED: " + token)
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.twitch.tv/helix/users?login=' + user, true);
  xhr.setRequestHeader('Client-ID', 'kqbr87pko5iupqye1s4l6cl70cx5e1');
  xhr.onload = function () {
    console.log(xhr.response)
    let xhrj = JSON.parse(xhr.response)
    console.log(xhrj)
    if(xhrj.length == 0) {
      console.log("xhrj too short!")
      document.getElementById("thanks").innerHTML = "lol fail";
    } else {
      document.getElementById("thanks").innerHTML = "<br>thanks fam <br>here's some information about a good channel<br><br>"
      let tblstr="<table>"
      tblstr+="<caption>User " + user + "</caption>"
      tblstr+="<tr>"
      console.log(xhrj.data[0].id)
      let i = 0
      for(let prop in xhrj.data[0]) {
        tblstr+=`<tr><th>${prop}</th>`
        tblstr+=`<td>` + xhrj.data[0][prop] + `</td></tr>`
      }
      tblstr+="</table>"
      document.getElementById("results").innerHTML = tblstr;
    }
    };

  xhr.send(null);

});
