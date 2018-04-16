function addProduct1() {
    let productName = $('input[type=text]').val()
    let productPrice = $('input[type=number]').val()

    if(productName === '' || productPrice === ''){
    }
    else{
        let body = $('#product-list')
        $(body).append($('<tr>')
            .append($('<td>').text(`${productName}`))
            .append($('<td>').text(`${Number(productPrice).toFixed(2)}`)))

        let total = Number($('tfoot td:eq(1)').text())
        total += Number(productPrice)
        $('tfoot td:eq(1)').text(total.toFixed(2))
        $('input[type=text]').val('')
        $('input[type=number]').val('')

    }
}

function addProduct() {
    let productName = $('input[type=text]').val()
    let productPrice = $('input[type=number]').val()

    if(productName === '' || productPrice === ''){
    }
    else{
        let body = $('#product-list')
        $(body).append($('<tr>')
            .append($('<td>').text(`${productName}`))
            .append($('<td>').text(`${Number(productPrice)}`)))

        let total = Number($('tfoot td:eq(1)').text())
        total += Number(productPrice)
        $('tfoot td:eq(1)').text(total)
        $('input[type=text]').val('')
        $('input[type=number]').val('')

    }
}