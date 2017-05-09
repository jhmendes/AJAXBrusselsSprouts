$('#get-dish').on('click', (event) => {
  event.preventDefault();

  let request = $.ajax({
    method: 'GET',
    url: '/dishes/random.json'
  });

    request.done((data) => {
      alert("Your random dish is " + data['dish']);
    });
});
