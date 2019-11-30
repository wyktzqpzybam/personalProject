function startTransition(){
    let element = document.getElementsByClassName("transition-box")[0];
    element.style.width = "100%";
}

function endTransition(){
    let element = document.getElementsByClassName("transition-box")[0];
    element.style.width = "0%";
}

function openURL(URL) {
    setTimeout( function() { window.location = URL }, 1700 );
}

 setTimeout( function() { endTransition(); }, 1 );
