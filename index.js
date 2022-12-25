//Client ID deca4b76e5114fdbb97ce87467341145
//Client Secret 93f8fc29f4a3427881a6228835eefd16



function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $('#blah').attr('src', e.target.result).width(150).height(200);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }