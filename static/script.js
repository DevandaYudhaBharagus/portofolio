$.ajax({
    type: 'GET',
    url: '/test_get?nama=devanda',
    success: function (response) {
        alert(response.nama)
    }
});