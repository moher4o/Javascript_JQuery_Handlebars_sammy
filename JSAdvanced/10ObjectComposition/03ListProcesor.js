function listProcesor(arr){
    let ryzen = (function processor() {
        let list = []
        return {
            add: function (str) {
                list.push(str)
            },

            remove: function (str) {
                list = list.filter((a) => a !== str)
            },

            print: function toString() {
                console.log(list.join(','))
            }
        }

    })()
    for (let stringCommand of arr) {
        let [command, parameter] = stringCommand.split(' ')
        ryzen[command](parameter)
    }
}

listProcesor(['add hello', 'add again', 'remove hello', 'add again', 'print'])