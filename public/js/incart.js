// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready((function() {
  $('.save-cart').on('click', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const currentCart = localStorage.getItem(cart);

    // Send the POST request.
    $.ajax('/api/cart', {
      type: 'POST',
      data: currentCart,
    }).then(
        function() {
          console.log('cart saved!');
          // Reload the page to get the updated list
          location.reload();
        },
    );
  });

  $('.remove-item').on('click', function(event) {
    const id = $(this).data('id');

    // Send the DELETE request.
    $.ajax('/api/cart/' + id, {
      type: 'DELETE',
    }).then(function() {
      console.log('Item removed from cart', id);
      // Reload the page to get the updated list
      location.reload();
    },
    );
  });
}));
