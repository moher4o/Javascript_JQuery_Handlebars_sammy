function createBook(selector,title,author,isbn) {
    let val = (function bookGenerator(){
        let id = 1
        return function(selectorName,titleName,authorName,isbnN){
            let bookId = 'book'+id
            let div = $('<div>').attr('id','book'+id).css('border','medium none')
                .append($(`<p>${titleName}</p>`).addClass('title'))
                .append($(`<p>${authorName}</p>`).addClass('author'))
                .append($(`<p>${isbnN}</p>`).addClass('isbn'))
                .append($('<button>Select</button>').on('click',selectBook))
                .append($('<button>Deselect</button>').on('click',deselectBook))
            $(selectorName).append(div)
            id++

            function selectBook(){
                $(`#${bookId}`).css('border','2px solid blue')

            }

            function deselectBook(){
                $(`#${bookId}`).css('border','')
            }

        }
    })()

    val(selector,title,author,isbn)
   // val(selector,title,author,isbn)
    //val(selector,title,author,isbn)
}
