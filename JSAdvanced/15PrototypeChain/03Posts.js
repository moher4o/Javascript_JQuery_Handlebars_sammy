let result = (function solve(){
    class Post{
        constructor(title, content){
            this.title = title
            this.content = content
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}\n`

            //console.log(`Post: ${this.title}`)
            //console.log(`Content: ${this.content}`)
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content)
            this.likes = Number(likes)
            this.dislikes = Number(dislikes)
            this.comments = []
        }

        addComment(commnet){
           this.comments.push(commnet)
        }

        toString(){
           let result = super.toString() + `Rating: ${this.likes - this.dislikes}`
            if(this.comments.length > 0){
               result += `\nComments:\n` + this.comments.map(c => ` * ${c}`).join('\n')
            }
            return result
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content)
            this.views = views
        }

        view(){
           ++this.views
            return this
        }

        toString(){
            let result = super.toString() + `Views: ${this.views}`
            return result
        }

    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
})()

let Post = result.Post
let SocialMediaPost = result.SocialMediaPost
let BlogPost = result.BlogPost

let test = new BlogPost("TestTitle", "TestContent", 5);

test.view().view()

console.log(''+test.toString())

