const firebaseConfig = {
    apiKey: "AIzaSyDQAVyuQgQhKPw_t9uz25hcDuH61rX9kQ8",
    authDomain: "funolympics-7fb1e.firebaseapp.com",
    databaseURL: "https://funolympics-7fb1e-default-rtdb.firebaseio.com",
    projectId: "funolympics-7fb1e",
    storageBucket: "funolympics-7fb1e.appspot.com",
    messagingSenderId: "477924212531",
    appId: "1:477924212531:web:1c79e0437782eb75c5c846",
    measurementId: "G-PCCDS473HL"
  };

  firebase.initializeApp(firebaseConfig);

  const contactFormDB = firebase.database().ref("contact-form");

  document.getElementById("contact-form").addEventListener("submit", submitForm);


  function submitForm(e){
      e.preventDefault();

      var name = getElementVal("name");
      var email = getElementVal("email");
      var message = getElementVal("message");

      saveMessages(name, email, message);

      document.querySelector('.alert').style.display = 'block';

      setTimeout(() =>{
        document.querySelector('.alert').style.display = 'none';
      }, 3000);

      document.getElementById("contact-form").reset();

  }

  const saveMessages = (name, email, message) =>{
      var newContactForm = contactFormDB.push();
      newContactForm.set({
          name:name,
          email:email,
          message:message,
      });
  };

  const getElementVal = (id) =>{
      return document.getElementById(id).value;
  };
