function attachEvents() {

    $('#submit').click(findLocation)
    let baseUrl = 'https://judgetests.firebaseio.com/forecast/'
    let codes = {
        Sunny: '&#x2600;',
        Partlysunny: '&#x26C5;',
        Overcast: '&#x2601;',
        Rain: '&#x2614;',
        Degrees: '&#176;'
    }


    function findLocation(){

        $.get('https://judgetests.firebaseio.com/locations.json')
            .then(getForecast)
            .catch(handleError)
    }

    function getForecast(locationArr){
        let userLocation = $('#location').val()
        let location = locationArr.filter(el => el.name === userLocation)
            .map(el => el.code)[0]

        let todayForecastP = $.get(baseUrl+`today/${location}.json `)
        let threeDayForecastP = $.get(baseUrl+`upcoming/${location}.json`)
        Promise.all([todayForecastP,threeDayForecastP])
            .then(displayForecast)
            .catch(handleError)

    }

    function displayForecast(data) {

        let todayForecast = data[0]
        let upcommingForecast = data[1].forecast

        $('#forecast').css('display','block')
        let current = $('#current')
        current.empty()
        $('<div class="label">Current conditions</div>').appendTo(current)
        $(`<span class="condition symbol">${codes[todayForecast.forecast.condition.replace(' ', '')]}</span>`).appendTo(current)
        let condition = $('<span class="condition"></span>')
        $(`<span class="forecast-data">${todayForecast.name}</span>`).appendTo(condition)
        $(`<span class="forecast-data">${todayForecast.forecast.low}${codes.Degrees}/${todayForecast.forecast.high}${codes.Degrees}</span>`).appendTo(condition)
        $(`<span class="forecast-data">${todayForecast.forecast.condition}</span>`).appendTo(condition)
        condition.appendTo(current)

        let upcoming = $('#upcoming')
        upcoming.empty()
        $('<div class="label">Three-day forecast</div>').appendTo(upcoming)
        for (let forecast of upcommingForecast) {
            let currentUpcomming = $('<span class="upcoming"></span>')
            $(`<span clas="symbol">${codes[forecast.condition.replace(' ', '')]}</span>`).appendTo(currentUpcomming)
            $(`<span class="forecast-data">${forecast.low}${codes.Degrees}/${forecast.high}${codes.Degrees}</span>`).appendTo(currentUpcomming)
            $(`<span class="forecast-data">${forecast.condition}</span>`).appendTo(currentUpcomming)
            currentUpcomming.appendTo(upcoming)
        }



    }

    function handleError(error){
        $('#forecast').css('display','block').empty().append("Error")

    }
}