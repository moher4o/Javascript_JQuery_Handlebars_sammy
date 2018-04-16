function sort(colIndex, descending) {
    if(colIndex === 0){
        sortByName(descending)
    }
    else{
        sortByPrice(descending)
    }

    function sortByName(descending){
        if(descending) {
            let tableData = $('tbody tr').toArray().sort((a, b) => $(b.children[0]).text().localeCompare($(a.children[0]).text()))
            $('tbody').empty()
            $('tbody').append($(tableData))
        }
        else{
            let tableData = $('tbody tr').toArray().sort((a, b) => $(a.children[0]).text().localeCompare($(b.children[0]).text()))
            $('tbody').empty()
            $('tbody').append($(tableData))
        }

    }

    function sortByPrice(descending) {
        if(descending){
            let tableData = $('tbody tr').toArray().sort((a, b) => $(b.children[1]).text() - $(a.children[1]).text())
            $('tbody').empty()
            $('tbody').append($(tableData))

        }
        else{
            let tableData = $('tbody tr').toArray().sort((a, b) => $(a.children[1]).text() - $(b.children[1]).text())
            $('tbody').empty()
            $('tbody').append($(tableData))

        }
    }
}
