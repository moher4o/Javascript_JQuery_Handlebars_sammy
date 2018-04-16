function search(){
    let text = $('#searchText').val()
    let towns = $('#towns li:contains(text)')
    $('#result').text(`${towns.length} matches found`)
    console.log(text)
}