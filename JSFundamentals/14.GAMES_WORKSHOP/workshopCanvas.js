let canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

let image = new Image()
image.src='./parka.jpg'
image.addEventListener('load', function(){
    ctx.drawImage(image, 50,50)
});
//console.log('test')