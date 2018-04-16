function createCars(arr){
    let ryzen = (function processor() {
        let obj = {}

        function inherit(name, parentName) {
            let parent = obj[parentName]
            obj[name] = Object.create(parent)
        }

        function create() {
            if (arguments[1] === undefined) {
                obj[arguments[0]] = {}
            }
            else {
                inherit(arguments[0], arguments[2])
            }
        }

        function set(name, key, value) {
            obj[name][key] = value
        }

        function print(name) {
            let props = []
            for (let key in obj[name]) {
                let currentProp = `${key}:${obj[name][key]}`
                props.push(currentProp)
            }
            console.log(props.join(', '))
        }

        return {
            create,
            set,
            print
         }

    })()
    for (let stringCommand of arr) {
        let [command, name, key, value] = stringCommand.split(' ')
        ryzen[command](name,key,value)
    }
}

createCars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)
