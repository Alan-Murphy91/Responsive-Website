//var name;
//var mail;
//var message;

$(document).ready(function() {
	$('#fullpage').fullpage({
        sectionSelector: '.section',
        controlArrows: true,
        navigation: true,
        menu: '#menu',
        anchors: ['pageone', 'pagetwo', 'pagethree', 'pagefour', 'pagefive'],
        responsiveWidth: 947,
    }); 
    
  $('.hamburger-menu').click(function (e) {
      e.preventDefault();
      if ($(this).hasClass('active')){
          $(this).removeClass('active');
          $('.menu-overlay').fadeToggle( 'fast', 'linear' );
          $('.menu .menu-list').slideToggle( 'slow', 'swing' );
          $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
      } else {
          $(this).addClass('active');
          $('.menu-overlay').fadeToggle( 'fast', 'linear' );
          $('.menu .menu-list').slideToggle( 'slow', 'swing' );
          $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
      }
  })      
    
    
    
//    Adding a touch of realism to the 'next departure' section on page 4
    
    var minA = parseInt($('.minA').html());
    var secA = parseInt($('.secA').html());
    
    var minB = parseInt($('.minB').html());
    var secB = parseInt($('.secB').html());
    
    var minC = parseInt($('.minC').html());
    var secC = parseInt($('.secC').html());    
    secA -= 40;
    setInterval(function(){ 
        $('.minA').html(minA);
        $('.secA').html(secA);
        
        $('.minB').html(minB);
        $('.secB').html(secB);
        
        $('.minC').html(minC);
        $('.secC').html(secC);        
        secA--;
        secB--;
        secC--;
        if(secA === -1){
            secA = 59;
            minA--;
        }
        
        if(secB === -1){
            secB = 59;
            minB--;
        }
        
        if(secC === -1){
            secC = 59;
            minC--;
        }        
    }, 1000);
    
    
    $('.submit').click(function(){
        var name;
        var mail;
        var message;        
        name = $('input[type=text]').val();
        if (name.length === 0){
            $('.formNm').css('color','red');
        } else {
            $('.formNm').css('color','white');
        }
        
        mail = $('input[type=texts]').val();
        if (mail.length === 0 || mail.indexOf('@') == -1){
            $('.formNmail').css('color','red');
        } else {
            $('.formNmail').css('color','white');
        }        
        
        message = $('input[type=textm]').val();
        if (message.length === 0){
            $('.formNMsg').css('color','red');
        } else {
            $('.formNMsg').css('color','white');
        }
        
        if(message.length !== 0 && mail.length !== 0 && name.length !== 0 && mail.indexOf('@') !== -1){
            $('#sent').html('Sent');
            $('.submit').css('display','none');
            $('.formNmail').html('');
            $('.formNm').html('');
            $('.formNMsg').html('');
        }
    });
    
    $('.submitb').click(function(){
        var name;
        var mail;
        var message;
        name = $('input[type=textb]').val();
        if (name.length === 0){
            $('.formNmb').css('color','red');
        } else {
            $('.formNmb').css('color','white');
        }
        
        mail = $('input[type=textsb]').val();
        if (mail.length === 0 || mail.indexOf('@') == -1){
            $('.formNmailb').css('color','red');
        } else {
            $('.formNmailb').css('color','white');
        }        
        
        message = $('input[type=textmb]').val();
        if (message.length === 0){
            $('.formNMsgb').css('color','red');
        } else {
            $('.formNMsgb').css('color','white');
        }
        
        if(message.length !== 0 && mail.length !== 0 && name.length !== 0 && mail.indexOf('@') !== -1){
            $('#sentb').html('Sent');
            $('.submitb').css('display','none');
            $('.formNmailb').html('');
            $('.formNmb').html('');
            $('.formNMsgb').html('');
        }
    });    
});