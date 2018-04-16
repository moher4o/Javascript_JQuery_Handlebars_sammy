$(() =>{
    attachEvents()

    function attachEvents(){
        let username = 'guest'
        let password = 'guest'
        $('#btnLoadPosts').on('click',loadPosts)
        $('#btnViewPost').on('click', viewPostDetails)
        let select = $('#posts')
        let baseUrl = 'https://baas.kinvey.com/appdata/kid_SyLDb_j9M/'

        async function loadPosts() {
            try{
                fillPosts(await request('posts'))
            }
            catch(reason){
                handleError(reason)
            }
            finally{

            }
        }

        function fillPosts(data) {
            select.empty()
            for(let post of data){
                let li = $(`<option value="${post._id}">${post.title}</option>`)
                select.append(li)
            }
        }

        async function viewPostDetails(){
            let list = $('#post-comments')
            list.empty()
            $('#post-title').text('')
            $('#post-body').empty()

            let postId = select.find('option:selected').val()
            let postR = request('posts/'+ postId)
            let commentsR = request(`comments/?query={"post_id":"${postId}"}`)

            try{
                let [post,comments] = await Promise.all([postR,commentsR])
                $('#post-title').text(post.title)
                $('#post-body').append($('<li>').text(post.body))

                for(comment of comments){
                    let li = $('<li>').text(comment.text)
                    li.appendTo(list)
                }


            }
            catch(reason){
                handleError(reason)
            }
            finally{

            }
        }

        function handleError(error){
            console.log(error.statusText)
        }

        function request(addon){
            return $.ajax({
                method: "GET",
                url: baseUrl + addon,
                headers :{
                    Authorization: 'Basic ' + btoa(username+':'+password)
                }

            })
        }
    }
})