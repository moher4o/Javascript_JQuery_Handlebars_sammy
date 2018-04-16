function isInside(arr){
    let volume = {x1:10, x2:50, y1:20, y2:80, z1:15, z2:50}
    function inside(coordinates){
        let point = {x:coordinates[0], y: coordinates[1], z:coordinates[2]}
        if(point.x >= volume.x1 && point.x <= volume.x2){
            if(point.y >= volume.y1 && point.y <= volume.y2){
                if(point.z >= volume.z1 && point.z <= volume.z2){
                    return true
                }
            }
        }
        return false
    }

    for (let i = 0; i < arr.length; i+=3) {
        let currentPoint = [arr[i],arr[i+1], arr[i+2]];
        inside(currentPoint) ? console.log("inside") : console.log("outside")
    }
}

//isInside([13.1, 50, 31.5,
//    50, 80, 50,
//    -5, 18, 43]
//)

function speedCheck(arr){
    let speed = arr[0]
    let zone = arr[1]
    let limit = getLimit(zone)
    let overSpeed = speed-limit

    let infraction = getInfraction(speed, limit)
    if(infraction !== false){
        console.log(infraction)
    }

    function getLimit(currentZone) {
        switch (currentZone) {
            case 'motorway' :
                return 130
            case 'interstate' :
                return 90
            case 'city' :
                return 50
            case 'residential' :
                return 20
        }
    }

    function getInfraction(currentSpeed, currentLimit){
        if(currentSpeed<=currentLimit) {
            return false
        }
        else if(currentSpeed <= currentLimit+20){
            return 'speeding'
        }

        else if(currentSpeed <= currentLimit+40){
            return 'excessive speeding'
        }
        else{
            return 'reckless driving'
        }

    }
}

//speedCheck([130, 'motorway'])

function template(arr){
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n'
    for (let i = 0; i < arr.length; i+=2) {
        result += addCouple(arr[i], arr[i+1])
    }
    result += '</quiz>'

    console.log(result);

    function addCouple(currentQuestion, currentString){
        return '  <question>\n' + '    ' +
                currentQuestion+'\n' +
            '  </question>\n' +
            '  <answer>\n' + '    ' +
                currentString+'\n' +
            '  </answer>\n'
    }
}

//template(["Dry ice is a frozen form of which gas?",
//    "Carbon Dioxide",
 //   "What is the brightest star in the night sky?",
//    "Sirius"])

function calculator(arr){
    let num = arr[0]
    let spice = (d) => { return d+1}
    let chop = (d) => { return d/2}
    let dice = (d) => { return Math.sqrt(d)}
    let bake = (d) => { return d*3}
    let fillet = (d) => { return 0.8*d}
    for (let i = 1; i < arr.length; i++) {
        switch (arr[i]){
            case 'spice':
                num = spice(num)
                console.log(num);
                break
            case 'chop':
                num = chop(num)
                console.log(num);
                break
            case 'dice':
                num = dice(num)
                console.log(num);
                break
            case 'bake':
                num = bake(num)
                console.log(num);
                break
            case 'fillet':
                num = fillet(num)
                console.log(num);
                break
        }

    }
}
//calculator([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])

function averageFive(num){
    function check(str){
        let currentStr = str + ''
        let sum = 0
        for (let i = 0; i < currentStr.length; i++) {
            sum += parseInt(currentStr[i]);
        }
        return sum/currentStr.length > 5 ? true : false
    }

    function addNine(str){
        let currentStr = str + ''
        return currentStr+'9'
    }

    while(!check(num)){
        num = addNine(num)
    }
    console.log(num);
}

//averageFive(5835)
function treasure(arr){
    let tokelau = {x1:8, x2:9, y1:0, y2:1}
    let tuvalu = {x1:1, x2:3, y1:1, y2:3}
    let samoa = {x1:5, x2:7, y1:3, y2:6}
    let tonga = {x1:0, x2:2, y1:6, y2:8}
    let cook = {x1:4, x2:9, y1:7, y2:8}
    let land = {tokelau, tuvalu, samoa, tonga, cook}

    function check(island, point){
        if(point.x >= island.x1 && point.x <= island.x2){
            if(point.y >= island.y1 && point.y <= island.y2){
                return true
             }
        }
        return false
    }

    function landCheck(treaqsurePoint){
        for (let index in land) {
            let result = check(land[index],treaqsurePoint)
            if(result) {
                switch (index) {
                    case 'tokelau':
                        return 'Tokelau'
                    case 'tuvalu':
                        return'Tuvalu'
                     case 'samoa':
                        return'Samoa'
                    case 'tonga':
                        return'Tonga'
                    case 'cook':
                        return'Cook'
                }
            }
        }
        return 'On the bottom of the ocean'
    }

    for (let i = 0; i < arr.length; i+=2) {
        let currentPoint = {x:arr[i], y:arr[i+1]}
        console.log(landCheck(currentPoint));
    }
}

//treasure([4, 2, 1.5, 6.5, 1, 3])

function solve(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH**2 + distY**2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

//solve([3, 0, 0, 4])

function shortDistance(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
    let x3 = Number(arr[4]);
    let y3 = Number(arr[5]);


    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH ** 2 + distY ** 2);
    }

    let firstDistance = distance(x1,y1,x2,y2)
    let secondDistance = distance(x2,y2,x3,y3)
    let thirdDistance = distance(x1,y1,x3,y3)

    let maxDistance = Math.max(firstDistance,secondDistance,thirdDistance)

    if(maxDistance === thirdDistance){
        console.log(`1->2->3: ${firstDistance+secondDistance}`)
    }
    if(maxDistance === secondDistance){
        console.log(`2->1->3: ${firstDistance+thirdDistance}`)
    }
    if(maxDistance === firstDistance){
        console.log(`1->3->2: ${thirdDistance+secondDistance}`)
    }

}
shortDistance([-1, -2, 3.5, 0, 0, 2])

