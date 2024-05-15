document.addEventListener('DOMContentLoaded', function () {
    var body = document.getElementsByTagName('body')[0];
    createPageStructure(body);
    executeAfterPageCreation();


});






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
    dropzone.className = 'dropzone mt-5 file-upload';
    dropzone.id = 'dropzone';
    // 将元素添加到容器中
    container.appendChild(h1);
    container.appendChild(dropzone);

    var textareaDiv = document.createElement('div');
    textareaDiv.className = 'textarea-container'

    var textareaLabel = document.createElement('label');
    textareaLabel.textContent = '图片地址：';

    var textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', '')
    textarea.id = 'styledTextarea';
    textarea.className = 'styled-textarea';

    textareaDiv.appendChild(textareaLabel);
    textareaDiv.appendChild(textarea);

    container.appendChild(textareaDiv);


    // 将容器添加到body中
    body.appendChild(container);




}

function executeAfterPageCreation() {
    Dropzone.autoDiscover = false;
    var dropzone = new Dropzone("#dropzone", {
        url: "https://filebroker.aliexpress.com/x/upload",
        paramName: "file",
        method: "post",
        headers: {},
        params: {
            "bizCode": "ae_profile_avatar_upload"
        },
        maxFilesize: 51200,
        acceptedFiles: ".jpg,.jpeg,.gif,.bmp,.png",
        dictDefaultMessage: "拖拽图片到此处，或点击上传",
        success: function (file, response) {
            Mycallback(response);
        },
        error: function (file, response) {
            if (window.confirm("上传失败，请先登录阿里巴巴账号自动获取COOKIE，点击【确定】前往登陆")) {
                location.href = "https://best.aliexpress.com/"
            }
        }
    });
}

const Mycallback = (response) => {
    var imgUrl = response.url;
    document.getElementById('styledTextarea').value = imgUrl;
}