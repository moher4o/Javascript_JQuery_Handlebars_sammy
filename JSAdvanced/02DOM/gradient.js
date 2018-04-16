
function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }
    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }
}


function attachGradientEvents(){
    let gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', detectMouse)
    gradient.addEventListener('mouseout', mouseOut)
    let result = document.getElementById('result')

    function detectMouse(event){
         let positionPercentage = Math.trunc(event.offsetX*100/(this.clientWidth-1))
         result.textContent = positionPercentage + '%'

    }

    function mouseOut(event){
        result.textContent = ''
    }
}
