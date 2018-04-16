function startApp1() {
    //sessionStorage.clear()
    showHideMenuLinks()

    showView('viewHome')

    $("#linkHome").click(showHomeView)
    $("#linkLogin").click(showLoginView)
    $("#linkRegister").click(showRegisterView)
    $("#linkListAds").click(listProducts)
    $("#linkCreateAd").click(showCreateAdView)
    $("#linkLogout").click(logoutUser)

    $('#buttonLoginUser').click(loginUser)
    $('#buttonRegisterUser').click(registerUser)
    $('#buttonCreateAd').click(createProduct)
    $('#buttonEditAd').click(editProduct)
    //$("form").submit(function(event) { event.preventDefault() });

    $("#infoBox, #errorBox").click(function() {
        $(this).fadeOut()
    })

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    })

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_H1FeShxoG";
    const kinveyAppSecret = "b552c28ed9754f068d5983ba65a0385e";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken') == null) {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
            $("#loggedInUser").hide();
        } else {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
            $("#loggedInUser").show();
        }
    }

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        $('#formLogin').trigger('reset');
        showView('viewLogin');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showListAdsView() {
        showView('viewAds');
    }

    function showCreateAdView() {
        $('#vformCreateAd').trigger('reset')
        showView('viewCreateAd')
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.');
    }

    function showInfo(info) {
        $('#infoBox').text(info)
        $('#infoBox').show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 2000);

    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }


//USER CRUD --------------START--------------------//

    function registerUser() {
        if($('#formRegister input[name=username]').val() === '' || $('#formRegister input[name=passwd]').val() === ''){
            showError("Username or password can't be empty")
        }
        else{
            const kinveyRegisterUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
            let userData = {
                username: $('#formRegister input[name=username]').val(),
                password: $('#formRegister input[name=passwd]').val()
            };
            $.ajax({
                method: "POST",
                url: kinveyRegisterUrl,
                headers: kinveyAppAuthHeaders,
                data: userData,
                success: registerSuccess,
                error: handleAjaxError
            });

            function registerSuccess(userInfo) {
                console.log('Attempt register successfull')
                saveAuthInSession(userInfo);
                showHideMenuLinks();
                listProducts();
                showInfo('Register successful.');
            }
        }
    }


    function loginUser() {
        const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/login";
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyLoginUrl,
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });

        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listProducts();
            showInfo('Login successful.');
        }
    }

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        $('#loggedInUser').text("Welcome, " + username + "!");
    }
//USER CRUD --------------END--------------------//

    //PRODUCT CRUD --------------------------START-------------------------------//

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken')
        }
    }

    function listProducts() {

        let body = $('#viewAds').find('tbody')
        body.empty()
        showView('viewAds')

        const kinveyProductsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/products";
        $.ajax({
            method: "GET",
            url: kinveyProductsUrl,
            headers: getKinveyUserAuthHeaders(),
            success: loadProductsSuccess,
            error: handleAjaxError
        });

        function loadProductsSuccess(products){
            showInfo('Products loaded.');
            if (products.length == 0) {
                $('#ads').empty()
                $('#ads').text('No products in the prodavachnik.');
            }
            else{
                for (let product of products) {
                    let tr = $('<tr>')
                    $(`<td>${product.title}</td>`).appendTo(tr)
                    $(`<td>${product.publisher}</td>`).appendTo(tr)
                    $(`<td>${product.description}</td>`).appendTo(tr)
                    $(`<td>${product.price}</td>`).appendTo(tr)
                    $(`<td>${product.datePublished}</td>`).appendTo(tr)
                    let linksTd = $('<td>')
                    if (product._acl.creator == sessionStorage['userId']) {
                        let links = [];
                        let viewLink = $('<a href="#">[Read more]</a>')
                            .click(readMoreProduct.bind(this, product));
                        let deleteLink = $('<a href="#">[Delete]</a>')
                            .click(deleteProduct.bind(this, product));
                        let editLink = $('<a href="#">[Edit]</a>')
                            .click(loadProductForEdit.bind(this, product));
                        links = [viewLink, ' ', deleteLink, ' ', editLink];
                        linksTd.append(links)
                    }
                    tr.append(linksTd)
                    tr.appendTo(body)
                }
            }
        }

    }

    function readMoreProduct(product) {
        if(product.image){
            $('#picture').hide()
            $('#viewAd img').prop('src',product.image)
            $('#viewAd img').show()

        }else{
            $('#viewAd img').hide()
            $('#picture').show();
        }
        $('#viewAd div[name=title]').text(product.title)
        $('#viewAd div[name=publisher]').text(product.publisher)
        $('#viewAd div[name=datePublished]').text(product.datePublished)
        $('#viewAd div[name=price]').text(product.price + 'лв.')
        $('#viewAd div[name=description]').text(product.description)
        showView('viewAd');


    }

    function deleteProduct(product){
        const kinveyProductUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/products/" + product._id;
        $.ajax({
            method: "DELETE",
            url: kinveyProductUrl,
            headers: getKinveyUserAuthHeaders(),
            success: deleteProductSuccess,
            error: handleAjaxError
        })

        function deleteProductSuccess(response) {
            listProducts();
            showInfo('Product deleted.')
        }
    }

    function loadProductForEdit(product) {
            $('#formEditAd input[name=id]').val(product._id)
            $('#formEditAd input[name=title]').val(product.title)
            $('#formEditAd input[name=image]').val(product.image)
            $('#formEditAd input[name=publisher]').val(product.publisher)
            $('#formEditAd input[name=datePublished]').val(product.datePublished)
            $('#formEditAd input[name=price]').val(product.price)
            $('#formEditAd textarea[name=description]').val(product.description)
            showView('viewEditAd')
    }

    function showCreateAdView() {
        showView('viewCreateAd')
    }

    function createProduct() {
        const kinveyProductsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/products"
        let newProduct = {
            title: $('#formCreateAd input[name=title]').val(),
            datePublished: $('#formCreateAd input[name=datePublished]').val(),
            description: ($('#formCreateAd textarea[name=description]').val()),
            price: Number($('#formCreateAd input[name=price]').val()).toFixed(2),
            publisher: sessionStorage.getItem('username'),
            image: $('#formCreateAd input[name=image]').val()
        }
        $.ajax({
            url: kinveyProductsUrl,
            method: 'POST',
            headers: getKinveyUserAuthHeaders(),
            data: newProduct,
            success: createProductSuccess,
            error: handleAjaxError
        })

        function createProductSuccess(product) {
            listProducts();
            showInfo('Product created.');
        }
    }

    function editProduct() {
        const kinveyProductUrl =  kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/products/" + $('#formEditAd input[name=id]').val();
        let productData = {
            title: $('#formEditAd input[name=title]').val(),
            publisher: $('#formEditAd input[name=publisher]').val(),
            description: $('#formEditAd textarea[name=description]').val(),
            datePublished: $('#formEditAd input[name=datePublished]').val(),
            price: Number($('#formEditAd input[name=price]').val()).toFixed(2),
            image: $('#formEditAd input[name=image]').val()
        };
        $.ajax({
            method: "PUT",
            url: kinveyProductUrl,
            headers: getKinveyUserAuthHeaders(),
            data: productData,
            success: editProductSuccess,
            error: handleAjaxError
        });

        function editProductSuccess(response) {
            listProducts();
            showInfo('Product edited.');
        }

    }
    //PRODUCT CRUD----------------------------END--------------------------------//

}