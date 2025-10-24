$(document).ready(function() {
  $('#nj-wish-name, #nj-wish-content').keyup(function() {
    var valid = $('#nj-wish-name').val() && $('#nj-wish-content').val();
    if (valid) {
      $('#nj-wish-submit').prop('disabled', false); 
    } else {
      $('#nj-wish-submit').prop('disabled', true);
    }
  });

  $('#nj-wish-submit').click(function() {
    submitWish();
  });

  function displayMessage(message)
  {
    alert(message);
  }

  function displayWish(name, content) {
    $('.list_wish').prepend(`<div class="item_wish">
      <div class="name">${name}</div>
      <div class="content">${content}</div>
    </div>`);
  }

  function submitWish()
  {
    if (njWishId) {
      var name =$('#nj-wish-name').val();
      var phone =$('#nj-wish-phone').val();
      var content =$('#nj-wish-content').val();

      $.ajax({
        url: '/wish/submit',
        type: "POST",
        // dataType: "json",
        //context: this,
        data: {
          'name': $('#nj-wish-name').val(),
          'phone': $('#nj-wish-phone').val(),
          'content': $('#nj-wish-content').val(),
          'id': njWishId,
        },
        success: function (response) {
          displayWish(name, content);
          displayMessage(response.message);
        },
        error: function (response) {
          displayMessage(response.responseJSON.message);
        },
        cache: false
      });
    }
  }
})
