function notify(message, type){
    let toast = document.getElementById('notification')
    toast.textContent = message
    toast.style.display = 'block'

    switch(type){
        case 'error':  toast.style.background = '#991111'
            break
        case 'success': toast.style.background = '#119911'
            break
        case 'info':  toast.style.background = '#111199'
            break
        default:
            break
    }
    setTimeout(() => toast.style.display = 'none', 2000)
}


function loadRepos() {
        let req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
                document.getElementById("res").textContent =
                    this.responseText;
        };
        req.open("GET",
            "https://api.github.com/users/testnakov/repos", true);
        req.send();
    }

