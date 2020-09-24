window.fbAsyncInit = function () {
    FB.init({
        appId: '381109089550489',
        cookie: true,
        xfbml: true,
        version: 'v8.0'
    });


    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });;

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function statusChangeCallback(response) {                   
    if (response.status === 'connected') {
        console.log("Logged in and authenticated");
        testAPI();
    } else {
        console.log("not authenticated");
    }
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}



function testAPI() {
    console.log('Welcome!  Processing the information ');
    FB.api('/me?fields=name,email', function (response) {
        if (response && !response.error) {
            console.log(response);
            // window.location.href = "http://localhost:5500/home.html";
              console.log('Successful login for: ' + response.name);
            buildProfile(response);
        }
    });
}


function buildProfile(user) {
    console.log(user.name);
    let profile = `
      <ul class="list-group">
      <li class="list-group-item">Name: ${user.name}</li>
        <li class="list-group-item">Email: ${user.email}</li>
      </ul>
    `;
}