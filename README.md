jQuery upload plugin by drp.io
==============================

This plugin allows you to **upload and store any type of files** to http://drp.io and retrieve informations to use them.
It does not require any authentication.

## Usage
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="drp-jquery-upload.js"></script>
```

## Documentation

The optional selector $('#input') is an upload input.

| Parameters|Description|
| ----------|:----------|
| progress      | A function to show upload progress. The function gets passed the percentage of the upload.
| success       | A function to be called if the request succeeds. The function gets passed the information about the image/images uploaded.
| submit       | Submit button which trigger files upload (jquery element).
| files       | Input files to upload.

### Example 1 with basic parameters
```html
<input id="inputUpload" multiple="multiple" type="file" name="name" />
```
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
### Exemple 2 with submit button as parameter
```html
<input id="inputUpload2" multiple="multiple" type="file" name="name" />
<input id="submitUpload2" type="submit"/>
```
```javascript
$('#inputUpload2').drpUpload({
  submit: $('#submitUpload2'),
  success: function(data) {
    console.log(data);
  }
});
```
### Exemple 3 with files parameters
```html
<input id="inputUpload3" multiple="multiple" type="file" name="name" />
```
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
