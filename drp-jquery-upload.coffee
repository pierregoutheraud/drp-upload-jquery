(($) ->

  $.fn.drpUpload = (params) ->

    $input = $(this)

    submit = (e) ->
      files = $input[0].files or e.target.files or (e.dataTransfer and e.dataTransfer.files)
      processFiles( files )

    processFiles = (files) ->

      formData = new FormData()
      i = 0
      j = 0
      f = undefined

      while f = files[i]
        continue unless f.type.match("image.*")
        formData.append "file" + i, f
        i++

      upload( formData )

    upload = (formData) ->

      url = 'http://api.drp.io/upload'
      $.ajax
        url: url
        type: 'POST'
        crossDomain: true
        xhr: ->
          xhr = $.ajaxSettings.xhr()
          if params.progress && xhr.upload
            xhr.upload.addEventListener 'progress', handleUploadProgress
          xhr

        success: (response) ->
          if params.success
            params.success( response )

        error: (jqXHR, textStatus, error) ->
          console.error error

        dataType: 'json'
        data: formData

        #Options to tell JQuery not to process data or worry about content-type
        cache: false
        contentType: false
        processData: false

    handleUploadProgress = (e) ->
      if e.lengthComputable
        done = e.position or e.loaded
        total = e.totalSize or e.total
        percentage = Math.round((Math.floor(done / total * 1000) / 10))
        # if percentage >= 100
        params.progress( percentage )
      return

    if params.submit
      params.submit.on 'click', submit
    else
      $(this).on 'change', submit

) jQuery