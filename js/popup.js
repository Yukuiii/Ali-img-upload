document.addEventListener('DOMContentLoaded', function() {
    var dropzone = new Dropzone("#dropzone", {
        url: "https://yourserver.com/upload",
        paramName: "file", // The name that will be used to transfer the file
        acceptedFiles: "image/*",
        dictDefaultMessage: "Drop image here or click to upload",
        success: function(file, response) {
            showMessage('Upload successful!');
        },
        error: function(file, response) {
            showMessage('Upload failed...');
        }
    });

    function showMessage(message) {
        document.getElementById('message').textContent = message;
    }
});