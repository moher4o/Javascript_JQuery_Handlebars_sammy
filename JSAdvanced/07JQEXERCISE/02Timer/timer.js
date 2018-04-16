function timer(){
    let hours = $('#hours')
    let minutes = $('#minutes')
    let seconds = $('#seconds')
    let interval
    let sec = Number(1)
    $('#start-timer').on('click', startTimer)

    $('#stop-timer').on('click', stopTimer)

    function startTimer(){

            interval = setInterval(step, 1000)
            $('#start-timer').off('click')
            function step() {
                let currentSeconds = sec % 60
                let currentHours = Math.trunc(sec / 3600)
                let currentMinutes = Math.trunc((sec - (currentHours*3600)) / 60)
                if(currentHours === 24){
                    currentHours = 0
                    sec = 0
                }
                $(seconds).text(`${('0' + currentSeconds).slice(-2)}`)
                $(minutes).text(`${('0' + currentMinutes).slice(-2)}`)
                $(hours).text(`${('0' + currentHours).slice(-2)}`)

                console.log(sec);
                console.log(currentSeconds);
                sec++
            }

    }

    function stopTimer(){
        clearInterval(interval)
        $('#start-timer').on('click', startTimer)
        //sec = 1
    }
}