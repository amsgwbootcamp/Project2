$(document).ready(function() {
  $('.modalButton').click(function() {
    $('.foodModal').modal({
      closable: false,
      allowMultiple: true,
    }).modal('show');
<<<<<<< HEAD
  });
  // Adding a comment so file will be marked as changed.  
=======
  })
>>>>>>> 81b4969f8dd4e4c2402e244538c8eacee6260b70
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get('/api/user_data').then(function(data) {
    $('.member-name').text(data.email);
  });
});
