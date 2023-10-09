function LogIn(){ loggedin=false; password=""; password=prompt("Password:",""); password=password.toLowerCase(); 
if (password=="n11111") 
{ loggedin=true; window.location="https://loginfor18--knowledgeisthebest.repl.co/nyeinchanoo18main.html"; } 
if (password=="ams22222") 
{ loggedin=true; window.location="https://loginfor18--knowledgeisthebest.repl.co/aungmyintsoe.html";
}
 if (password=="unw33334")
{ loggedin=true; window.location="https://loginfor18--knowledgeisthebest.repl.co/unyanwin.html";
  } 
   if (password=="t11111") 
{ loggedin=true; window.location="https://loginfor18--knowledgeisthebest.repl.co/6hourtest.html";
}              
                 if (loggedin==false) { alert("Invalid login!");}} 
  /*
const LogIn = () => {
    var loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus === "true") {
      var password = localStorage.getItem("password");
      redirectToPage(password);
      return;
    }
  
    var password = "";
    password = prompt("Password:", "");
    password = password.toLowerCase();
  
    if (password === "55555") {
       localStorage.setItem("loggedIn", "true");
      localStorage.setItem("password", password);
      redirectToPage(password);
    } else if (password === "test002") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("password", password);
      redirectToPage(password);
    } else if (password === "test003") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("password", password);
      redirectToPage(password);
    } else {
      alert("Invalid login!");
    }
  }
  
  const redirectToPage = (password) => {
    switch (password) {
     case "55555":
        if(password == "55555")
 
        window.location = "go:18expired";
        break;
      case "test002":
        
        window.location = "expiredate2.html";
        break;
      case "test003":
        
        window.location = "expiredate3.html";
        break;
      default:
        alert("Viber-09946369791ကိုဆက်သွယ်ပါ");
    }
  }
