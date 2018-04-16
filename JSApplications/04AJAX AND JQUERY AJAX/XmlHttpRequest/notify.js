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

//module.exports = {notify}

// <button onclick="notify('Something happened!')">Get notified</button>

// <style>
//         #notification {
//     float: right;
//     background: #119911;
//     color: #ffffff;
//     padding: 0.5em 2em 0.5em 2em;
//     margin: 1em;
//     display: none;
//     position: absolute;
//     top: 0;
//     right: 0;
// }
// </style>
