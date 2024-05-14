document.addEventListener('DOMContentLoaded', function() {
    var body = document.getElementsByTagName('body')[0];
    createPageStructure(body);

    // 页面构建完成后执行额外的JavaScript代码
    executeAfterPageCreation();


    });

    

function showMessage(message) {
        document.getElementById('message').textContent = message;
    }


// 创建页面结构
function createPageStructure(body) {
    document.title = '阿里图床╰(*°▽°*)╯';
    body.innerHTML = '';
    var container = document.createElement('div');
    container.className = 'container';

    var h1 = document.createElement('h1');
    h1.className = 'text-center mt-3';
    h1.textContent = '阿里图床上传';

    var dropzone = document.createElement('div');
    dropzone.className = 'dropzone text-primary mt-5';
    dropzone.id = 'dropzone';

    var message = document.createElement('div');
    message.className = 'message';
    message.id = 'message';

    // 将元素添加到容器中
    container.appendChild(h1);
    container.appendChild(dropzone);
    container.appendChild(message);

    // 将容器添加到body中
    body.appendChild(container);



}

function executeAfterPageCreation(){
    Dropzone.autoDiscover = false;
    var dropzone = new Dropzone("#dropzone", {
        url: "https://filebroker.aliexpress.com/x/upload",
        paramName: "file",
        method: "post",
        headers: {},
        params: { "bizCode": "ae_profile_avatar_upload" },
        maxFilesize: 51200,
        acceptedFiles: ".jpg,.jpeg,.gif,.bmp,.png",
        dictDefaultMessage: "拖拽图片到此处，或点击上传",
        success: function(file, response) {
            showMessage('Upload successful!');
        },
        error: function(file, response) {
            showMessage('Upload failed...');
        }

});}
