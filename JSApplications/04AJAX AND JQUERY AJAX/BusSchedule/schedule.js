function solve() {
    let nextStopId = 'depot'
    let stopName

    function depart(){
        $.get(`https://judgetests.firebaseio.com/schedule/${nextStopId}.json`)
            .then(travel)
            //.catch(displayError)
    }

    function travel(scheduleInfo){
        nextStopId = scheduleInfo.next
        stopName = scheduleInfo.name
        $('#info span').text(`Next stop ${stopName}`)
        $('#depart').prop('disabled','true')
        $('#arrive').removeAttr('disabled')
    }
    
    function arrive() {
        $('#info span').text(`Arriving at ${stopName}`)
        $('#depart').removeAttr('disabled')
        $('#arrive').prop('disabled','true')

    }

    return {
        depart,
        arrive
    };
}
let result = solve();
