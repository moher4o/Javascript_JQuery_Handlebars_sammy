function initialize(){
    class Contact{
        constructor(firstName,lastName,phone,email){
            this.firstName = firstName
            this.lastName = lastName
            this.phone = phone
            this.email = email
            this.online = false
        }

        set online(text){
            this._online = text
            if(this._online){
                $('#'+ `${this.firstName}`).children().eq(0).addClass('online')
            }
            else{
                $('#'+ `${this.firstName}`).children().eq(0).removeClass('online')
            }
        }

        get online(){
            return this._online
        }

        render(id){
            let article = $('<article>').attr('Id', `${this.firstName}`)
                .append($('<div>').addClass('title')
                   .text(`${this.firstName} ${this.lastName}`)
                    .append($(`<button>&#8505;</button>`).on('click',this.show)))
                .append($('<div>').addClass('info').css('display','none')
                    .append($(`<span>&phone; ${this.phone}</span>`))
                    .append($(`<span>&#9993; ${this.email}</span>`)))
            $('#'+id).append($(article))
        }
        show(){
            this.online = this.online ? false : true
            let currentarticle = $(this).parent().parent()
            $(currentarticle).children().eq(1).css('display', this.online ? 'block' : 'none')
        }
    }

    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));

    setTimeout(() => contacts[1].online = true, 2000);
    setTimeout(() => contacts[1].online = false, 5000);
}


//let div = $('<div>').attr('id','book'+id).css('border','medium none')