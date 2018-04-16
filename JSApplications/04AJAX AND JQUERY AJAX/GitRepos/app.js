function loadRepos() {
    $("#repos").empty();
    let url = "https://api.github.com/users/" +
        $("#username").val() + "/repos";
    $.ajax({ url,
        success: displayRepos,
        error: displayError
    });
    function displayRepos(respos) {
        let ul = $("#repos")
        for (let repo of respos) {
            //console.log(repo)
            let li = $(`<li>`)
            let a = $(`<a>`)
            a.attr('href',repo.html_url)
            a.text(repo.full_name)
            $(a).appendTo(li)
            $(ul).append(li)
        }

    }
    function displayError(err) {
        $("#repos").append($('<li>Error</li>'))
    }
}

function loadReposor(){
    $("#repos").empty();
    let url = "https://api.github.com/users/" +
        $("#username").val() + "/repos";
    $.ajax({ url,
        success: displayRepos,
        error: displayError
    });
    function displayRepos(respos) {
        for (let repo of respos) {
            let link = $('<a>').text(repo.full_name);
            link.attr('href', repo.html_url);
            $("#repos").append($('<li>').append(link));
        }
    }
    function displayError(err) {
        $("#repos").append($('<li>Error</li>'))
    }

}
