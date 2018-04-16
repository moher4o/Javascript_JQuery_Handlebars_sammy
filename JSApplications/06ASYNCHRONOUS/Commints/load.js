function loadCommits() {
    let username = $('#username').val()
    let repo = $('#repo').val()
    let list = $('#commits')
    list.empty()

    $.get(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(displayCommits)
        .catch(displayError)

    function displayCommits(data) {
        let commArr = []
        for (let obj of data) {
            //commArr.push(`${commit.author.name}: ${commit.message}`)
            list.append($(`<li>${obj.commit.author.name}: ${obj.commit.message}</li>`))
        }
    }

    function displayError(error) {
        list.append($(`<li>Error: ${error.status} (${error.statusText})</li>`))
    }

}
