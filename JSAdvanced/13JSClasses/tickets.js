function sortTickets(arr,criteria) {
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    let arrTickets = []
    for (let str of arr) {
        let[destination,price,status] = str.split('|')
        let currentTicket = new Ticket(destination,price,status)
        console.log(currentTicket[criteria])
        arrTickets.push(currentTicket)
    }

    let output = arrTickets.sort((a,b) => a[criteria] > b[criteria])
    return output
}

console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));