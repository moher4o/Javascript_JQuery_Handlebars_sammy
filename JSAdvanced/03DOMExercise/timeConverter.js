function attachEventsListeners(){
    let dayButton = document.getElementById('daysBtn')
    let hourButton = document.getElementById('hoursBtn')
    let minuteButton = document.getElementById('minutesBtn')
    let secondButton = document.getElementById('secondsBtn')
    let inputDays = document.getElementById('days')
    let inputHours = document.getElementById('hours')
    let inputMinutes = document.getElementById('minutes')
    let inputSeconds = document.getElementById('seconds')
    dayButton.addEventListener('click', dayEnter)
    hourButton.addEventListener('click', hourEnter)
    minuteButton.addEventListener('click', minuteEnter)
    secondButton.addEventListener('click', secondEnter)
     function dayEnter(){
            inputHours.value = Number(inputDays.value)*24
            inputMinutes.value = Number(inputDays.value)*1440
            inputSeconds.value = Number(inputDays.value)*86400
    }
    function hourEnter() {
        inputDays.value = Number(inputHours.value)/24
        inputMinutes.value = Number(inputHours.value)*60
        inputSeconds.value = Number(inputHours.value)*3600
    }
    function minuteEnter(){
        inputDays.value = Number(inputMinutes.value)/1440
        inputHours.value = Number(inputMinutes.value)/60
        inputSeconds.value = Number(inputMinutes.value)*60
    }
    function secondEnter(){
        inputDays.value = Number(inputSeconds.value)/86400
        inputHours.value = Number(inputSeconds.value)/3600
        inputMinutes.value = Number(inputSeconds.value)/60
    }
}