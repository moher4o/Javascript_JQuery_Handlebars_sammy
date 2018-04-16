function attachEvents(){
    let username = 'guest'
    let password = 'guest'
    let baseUrl = 'https://baas.kinvey.com/appdata/kid_rkC60kRqM/biggestCatches/'
    $('.add').on('click',addCatch)
    $('.load').on('click',loadCatches)


    function requestNew(method, id, dataToAdd){
        return $.ajax({
            method: method,
            url: baseUrl + id,
            headers: {
                Authorization: 'Basic ' + btoa(username + ':' + password),
                contentType: 'application/Json'
            },
            data: JSON.stringify(dataToAdd)
        })
    }

    function request(method, id, dataToAdd){
        method = method.toLowerCase()
        switch(method){
            case 'get':
                return $.ajax({
                    method: "GET",
                    url: baseUrl,
                    headers: {
                        Authorization: 'Basic ' + btoa(username + ':' + password)
                    }
                })
            case 'getid':
                return $.ajax({
                    method: "GET",
                    url: baseUrl + `?query={"_id":"${id}"}`,
                    headers: {
                        Authorization: 'Basic ' + btoa(username + ':' + password)
                    }
                })
            case 'post':
                return $.ajax({
                    method: "POST",
                    url: baseUrl,
                    headers: {
                        Authorization: 'Basic ' + btoa(username + ':' + password)
                    },
                    contentType: 'application/Json',  // not nessesary
                    data: JSON.stringify(dataToAdd),
                })
            case 'put':
                return $.ajax({
                    method: "PUT",
                    url: baseUrl + id,
                    headers: {
                        Authorization: 'Basic ' + btoa(username + ':' + password)
                    },
                    contentType: 'application/Json',  // not nessesary
                    data: JSON.stringify(dataToAdd),
                })
            case 'delete':
                return $.ajax({
                    method: "DELETE",
                    url: baseUrl + id,
                    headers: {
                        Authorization: 'Basic ' + btoa(username + ':' + password)
                    },
                    contentType: 'application/Json',  // not nessesary
                })
            default:
                return
        }
    }

    function addCatch(){
        let addForm = $('#addForm')
        let newCatch = {
            angler: addForm.find('.angler').val(),
            weight: Number(addForm.find('.weight').val()),
            species: addForm.find('.species').val(),
            location: addForm.find('.location').val(),
            bait: addForm.find('.bait').val(),
            captureTime: Number(addForm.find('.captureTime').val()),
        }
        let addP = request('POST',undefined, newCatch)
        let refreshCatchesP = request('get')
        // Promise.all([addP, refreshCatchesP])
        //     .then(displayCatches)
        //     .catch(handleError)
        addP
            .then(refreshCatchesP
                .then(displayCatches)
                .catch(handleError))
            .catch(handleError)
        addForm.find('.angler').val('')
        addForm.find('.weight').val('')
        addForm.find('.species').val('')
        addForm.find('.location').val('')
        addForm.find('.bait').val('')
        addForm.find('.captureTime').val('')
    }

    function displayCatches(catches) {
        //let catchesP = request('get')
        let divCatches = $('#catches')
        divCatches.empty()
        for (let currentCatch of catches) {
           let currentDivCatches = $(`<div class="catch" data-id="${currentCatch._id}"></div>`)
            $(currentDivCatches)
                .append($('<label>Angler</label>'))
                .append($(`<input type="text" class="angler" value="${currentCatch.angler}"/>`))
                .append($('<label>Weight</label>'))
                .append($(`<input type="number" class="weight" value="${currentCatch.weight}"/>`))
                .append($('<label>Species</label>'))
                .append($(`<input type="text" class="species" value="${currentCatch.species}"/>`))
                .append($('<label>Location</label>'))
                .append($(`<input type="text" class="location" value="${currentCatch.location}"/>`))
                .append($('<label>Bait</label>'))
                .append($(`<input type="text" class="bait" value="${currentCatch.bait}"/>`))
                .append($('<label>Capture Time</label>'))
                .append($(`<input type="number" class="captureTime" value="${currentCatch.captureTime}"/>`))
            let updateBtn = $('<button class="update">Update</button>')
            updateBtn.on('click',updateCatch.bind(updateBtn,currentCatch._id)).appendTo(currentDivCatches)
            let deleteBtn = $('<button class="delete">Delete</button>')
            deleteBtn.on('click',deleteCatch.bind(deleteBtn,currentCatch._id)).appendTo(currentDivCatches)
            currentDivCatches.appendTo(divCatches)
        }
    }
    
    function loadCatchesOLD() {
        let refreshCatchesP = request('get')
        refreshCatchesP
            .then(displayCatches)
            .catch(handleError)
    }

    async function loadCatches() {
        try{
            let refreshCatchesP = await request('get')
            displayCatches(refreshCatchesP)
        }
        catch(reason){
            handleError(reason)
        }
    }


    async function updateCatchOLD(id){
        let updateP = request('getId', id)
        let refreshCatchesP = request('get')
        try{
            let [updatedCatch] = await Promise.all([updateP])

            let newCatch = {
                angler: this.parent().find('.angler').val(),
                weight: Number(this.parent().find('.weight').val()),
                species: this.parent().find('.species').val(),
                location: this.parent().find('.location').val(),
                bait: this.parent().find('.bait').val(),
                captureTime: Number(this.parent().find('.captureTime').val()),
            }

            let updateCurrentCatchP = request('put',id, newCatch)
            try{
                await Promise.all([updateCurrentCatchP])
                await Promise.all([refreshCatchesP])
            }
            catch(reason){
                handleError(reason)
            }
        }
        catch(reason){
            handleError(reason)
        }

    }

    //Updated version  TRY catch
    async function updateCatch(id){
        let refreshCatchesP = request('get')
        try{
            //let [updatedCatch] = await request('getId', id)
            //let [updatedCatch] = await request('get', `?query={"_id":"${id}"}`)

            let newCatch = {
                angler: this.parent().find('.angler').val(),
                weight: Number(this.parent().find('.weight').val()),
                species: this.parent().find('.species').val(),
                location: this.parent().find('.location').val(),
                bait: this.parent().find('.bait').val(),
                captureTime: Number(this.parent().find('.captureTime').val()),
            }

            await request('put',id, newCatch)
            displayCatches(await request('get'))
        }
        catch(reason){
            handleError(reason)
        }

    }


    async function deleteCatch(id){
        try{
            let deleteP = await request('delete', id)
            let refreshCatchesP = await request('get')
            displayCatches(refreshCatchesP)
        }
        catch(reason){
            handleError(reason)
        }
        $(this).parent().remove()
    }

    function handleError(error){
        console.log(error);
    }
}
