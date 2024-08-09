
//   $(document).ready(function(){
//     $('#hireMeButton').click(function(event){
//         event.preventDefault();
//         var myModal = new bootstrap.Modal($('#hireMeModal'));
//         myModal.show();
//     });
//   });

  $(document).ready(function() {
    $('#hireMeButton').on('click', function() {
            $('#hireMeButton').text("clicked"); // Hide the form
    });
  });
  
