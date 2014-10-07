jQuery upload plugin by drp.io
==============================

## Usage
```javascript
<script src="drp-jquery-upload.js"></script>
```

## Documentation
Example 1 : basic parameters

| Parameters    |              |
| ------------- |:-------------|
| progress      | A function to show upload progress. The function gets passed the percentage of the upload.
| success       | A function to be called if the request succeeds. The function gets passed the information about the image/images uploaded.

$('#input') is a upload input in your html.

```javascript
$('#input').drpUpload({
  progress: function(percentage) {
    console.log(percentage);
  },
  success: function(data) {
    console.log(data);
  }
});
```
Exemple 2 with submit button as parameter
```javascript
$('#inputUpload2').drpUpload({
  submit: $('#submitUpload2'),
  success: function(data) {
    console.log(data);
  }
});
```
Exemple 3 with files parameters
```javascript
  var files = $input[0].files;
  $.drpUpload({
    files: files,
    progress: function(percentage) {
      console.log(percentage);
    },
    success: function(data) {
      console.log(data);
    }
  });
```
