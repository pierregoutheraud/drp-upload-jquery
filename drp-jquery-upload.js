(function($) {
  $.fn.drpUpload = function(params) {
    var $input, handleUploadProgress, processFiles, submit, upload;
    $input = $(this);
    submit = function(e) {
      var files;
      files = $input[0].files || e.target.files || (e.dataTransfer && e.dataTransfer.files);
      return processFiles(files);
    };
    processFiles = function(files) {
      var f, formData, i, j;
      formData = new FormData();
      i = 0;
      j = 0;
      f = void 0;
      while (f = files[i]) {
        if (!f.type.match("image.*")) {
          continue;
        }
        formData.append("file" + i, f);
        i++;
      }
      return upload(formData);
    };
    upload = function(formData) {
      var url;
      url = 'http://api.drp.io/upload';
      return $.ajax({
        url: url,
        type: 'POST',
        crossDomain: true,
        xhr: function() {
          var xhr;
          xhr = $.ajaxSettings.xhr();
          if (params.progress && xhr.upload) {
            xhr.upload.addEventListener('progress', handleUploadProgress);
          }
          return xhr;
        },
        success: function(response) {
          if (params.success) {
            return params.success(response);
          }
        },
        error: function(jqXHR, textStatus, error) {
          return console.error(error);
        },
        dataType: 'json',
        data: formData,
        cache: false,
        contentType: false,
        processData: false
      });
    };
    handleUploadProgress = function(e) {
      var done, percentage, total;
      if (e.lengthComputable) {
        done = e.position || e.loaded;
        total = e.totalSize || e.total;
        percentage = Math.round(Math.floor(done / total * 1000) / 10);
        params.progress(percentage);
      }
    };
    if (params.submit != null) {
      return params.submit.on('click', submit);
    } else if (params.files != null) {
      return processFiles(params.files);
    } else {
      return $(this).on('change', submit);
    }
  };
  return $.drpUpload = function(params) {
    return $('body').drpUpload(params);
  };
})(jQuery);
