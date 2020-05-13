$(document).ready(function() {
  $('.modalButton').click(function() {
    $('.foodModal').modal({
      closable: false,
      allowMultiple: true,
    }).modal('show');
  });
  // Adding a comment so file will be marked as changed.
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get('/api/user_data').then(function(data) {
    $('.member-name').text(data.email);
  });
});
