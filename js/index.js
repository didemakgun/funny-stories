var firebaseConfig = {
    apiKey: "AIzaSyCM99yt9Mw_KGxfH_Iikvrr0hw1VebstaE",
    authDomain: "storyalpha-31beb.firebaseapp.com",
    databaseURL: "https://storyalpha-31beb.firebaseio.com",
    projectId: "storyalpha-31beb",
    storageBucket: "storyalpha-31beb.appspot.com",
    messagingSenderId: "786687296365",
    appId: "1:786687296365:web:c369654a867b7f23665064"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth.Auth.Persistence.LOCAL;

    $("#btn-login").click(function() {
        var email = $("#email").val();
        var password = $("#password").val();

        if(email != "" && password != "") 
        {
            var result = firebase.auth().signInWithEmailAndPassword(email,password);

            result.catch(function(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                window.alert("Message : " + errorMessage);
            });

        }
        else 
        {
            window.alert("Please fill out all fields.");
        }
    });

    $("#btn-logout").click(function() 
    {
        firebase.auth().signOut();
    });

    $("#btn-signup").click(function() {
        var email = $("#email").val();
        var password = $("#password").val();
        var cPassword = $("#confirmPassword").val();

        if(email != "" && password != "" && cPassword != "") 
        {
            if(password == cPassword)
            {
            var result = firebase.auth().createUserWithEmailAndPassword(email,password);

             result.catch(function(error)
             {
                  var errorCode = error.code;
                   var errorMessage = error.message;
                   console.log(errorCode);
                    window.alert("Message : " + errorMessage);
              });

            }
            else {
                window.alert("Password do not match with Confirm Password.");
            }
        }
        else 
        {
            window.alert("Form is incomplete. Please fill out all fields.");
        }
    });


        
