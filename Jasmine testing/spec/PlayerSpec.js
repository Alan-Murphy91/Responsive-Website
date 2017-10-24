describe("Omicrons validation form", function() {

//The following logic is written in standard Javascript however I have implemented it in jQuery for the website
    
  it("should leave the input heading style unchanged if a value has been submitted before clicking the send button", function() {
      var test = 0;
      var title = document.createElement("span");
      var message = document.createElement("INPUT");
      message.setAttribute('type','text');
      title.innerHTML = "Message";
      message.value = "Hello world!";
      
      function validate(){
        test = message.value.length;
        if (test === 0){
            title.style.color = 'red';
        } else {
            title.style.color = 'white';
        }
        }
      
        validate();
        expect(title.style.color).toEqual('white');
        
  });
    
  it("should display a red font on the heading to alert user that they have left a field blank after clicking on the submit button", function() {
      var test = 0;
      var title = document.createElement("span");
      var message = document.createElement("INPUT");
      message.setAttribute('type','text');
      title.innerHTML = "Message";
      message.value = "";
      
      function validate(){
        test = message.value.length;
        if (test === 0){
            title.style.color = 'red';
        } else {
            title.style.color = 'white';
        }
        }
      
        validate();
        expect(title.style.color).toEqual('red');
        
  });       

    
  it("should display a red font on the email heading to alert user that they have not inserted a valid email, in this case checking for an instance of '@'", function() {
      var test = 0;
      var title = document.createElement("span");
      var mail = document.createElement("INPUT");
      mail.setAttribute('type','text');
      title.innerHTML = "Enter email";
      mail.value = "123.com";
      
      function validate(){
        test = mail.value;
        if (test.indexOf('@') == -1){
            title.style.color = 'red';
        } else {
            title.style.color = 'white';
        }
        }
      
        validate();
        expect(title.style.color).toEqual('red');
        
  });    
    
    
  it("should display a sent message if all fields have been filled and the email field has recieved a valid input", function() {
      var test1 = 0;
      var test2 = 0;
      var test3 = 0;
      var test4 = 0;
      var title1 = document.createElement("span");
      var title2 = document.createElement("span");
      var title3 = document.createElement("span");
      var button = document.createElement("div");
      
      var name = document.createElement("INPUT");
      var mail = document.createElement("INPUT");
      var message = document.createElement("INPUT");
      name.setAttribute('type','text');
      mail.setAttribute('type','text');
      message.setAttribute('type','text');
      title1.value = "Enter name";
      title2.value = "Enter email";
      title3.value = "Enter message";
      button.innerHTML = "Submit";
      
      name.value = 'Alan';
      mail.value = 'alan1@example.com';
      message.value = 'hello world';
      
      function validate(){
        test1 = name.value.length;
        test2 = mail.value.length;
        test3 = message.value.length;
        test4 = mail.value
        if (test1 !== 0 && test2 !== 0 && test3 !== 0 && test4.indexOf('@') != -1){
            button.innerHTML = "Sent";
        } else {
            alert('Error');
        }
        }
      
        validate();
        expect(button.innerHTML).toEqual('Sent');
        
  });       
});











//function() {
//      var name = document.createElement("div");
//      var mail = document.createElement("div");
//      var message = document.createElement("div");
//      
//      function validate(){
//        name = $('input[type=text]').val();
//        if (name.length === 0){
//            $('.formNm').css('color','red');
//        } else {
//            $('.formNm').css('color','white');
//        }
//        
//        mail = $('input[type=texts]').val();
//        if (mail.length === 0 || mail.indexOf('@') == -1){
//            $('.formNmail').css('color','red');
//        } else {
//            $('.formNmail').css('color','white');
//        }        
//        
//        message = $('input[type=textm]').val();
//        if (message.length === 0){
//            $('.formNMsg').css('color','red');
//        } else {
//            $('.formNMsg').css('color','white');
//        }
//        
//        if(message.length !== 0 && mail.length !== 0 && name.length !== 0 && mail.indexOf('@') !== -1){
//            $('#sent').html('Sent');
//            $('.submit').css('display','none');
//            $('.formNmail').html('');
//            $('.formNm').html('');
//            $('.formNMsg').html('');
//        }
//    }
//  });