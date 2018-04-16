class PaymentManager{
    constructor(title){
        this.title = title
    }

    render(id){
      $(`#${id}`)
          .append($('<table>')
              .append($('<caption>').text(`${this.title} Payment Manager`))
              .append($('<thead>')
                  .append($('<tr>')
                      .append($(`<th>Name</th>`).addClass('name'))
                      .append($(`<th>Category</th>`).addClass('category'))
                      .append($(`<th>Price</th>`).addClass('price'))
                      .append($(`<th>Actions</th>`))
                  ))
              .append($('<tbody>').addClass('payments'))
              .append($('<tfoot>').addClass('input-data')
                  .append($('<tr>')
                      .append($('<td>')
                          .append($('<input>').attr('name','name').attr('type','text')))
                      .append($('<td>')
                          .append($('<input>').attr('name','category').attr('type','text')))
                      .append($('<td>')
                          .append($('<input>').attr('name','price').attr('type','number')))
                      .append($('<td>')
                          .append($('<button>').text('Add').on('click',this.addProduct)))
                  )))

    }

    addProduct(){
        let tbody = $(this).parent().parent().parent().prev()
        let tr = $(this).parent().parent().children().toArray()
        //console.log(tr);
        let name = tr[0].firstChild.value
        let category = tr[1].firstChild.value
        let price = tr[2].firstChild.value
        if(name === '' || category === '' || price === '') {
            // console.log(name);
            $(tbody)
                .append($(`<td>${name}</td>`))
                .append($(`<td>${category}</td>`))
                .append($(`<td>${price}</td>`))
                .append($('<td>')
                    .append($('<button>').text('Delete').click(this.deleteProduct)))
            $('input').val('')
        }
    }

    deleteProduct(){
        console.log('click')
        let tr = $(this).parent().parent()
        console.log($(tr));
    }
}