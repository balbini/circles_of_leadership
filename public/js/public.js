$(document).ready(function(){
  $(".button-collapse").sideNav();

  $('#heading1').hide();
  $('#heading2').hide();
  $('#heading3').hide();
  $('#heading4').hide();

  $('.modal').modal({
    dismissable: true,
    opacity: .5,
    inDuration: 300,
    outDuration: 200,
    startingTop: '4%',
    endingTop: '10%',
    ready: function(modal, trigger){
      console.log("Ready");
      console.log('#modal1', trigger);
    },
    complete: function() {
      console.log('Closed');
    }
  });

  $('#service1').on('click', function(e){
    console.log("click received");
    $('#heading1').toggle();
  });
  $('#service2').on('click', function(e){
    console.log("click received");
    $('#heading2').toggle();
  });
  $('#service3').on('click', function(e){
    console.log("click received");
    $('#heading3').toggle();
  });
  $('#service4').on('click', function(e){
    console.log("click received");
    $('#heading4').toggle();
  });

  $('.dropdown-button').dropdown({
     inDuration: 300,
     outDuration: 225,
     constrainWidth: false, // Does not change width of dropdown to that of the activator
     gutter: 0, // Spacing from edge
     belowOrigin: true, // Displays dropdown below the button
     alignment: 'left', // Displays dropdown with edge aligned to the left of button
     stopPropagation: false // Stops event propagation
   }
 );
 $('.carousel.carousel-slider').carousel({fullWidth: true, dist: 0}, setTimeout(autoplay, 7000));
 function autoplay(){
   $('.carousel').carousel('next');
   setTimeout(autoplay, 7000);
 };



});
