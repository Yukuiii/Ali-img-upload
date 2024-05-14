
function createDynamicPage() {
    const body = document.body;
    document.title = '阿里图床╰(*°▽°*)╯';
    body.innerHTML = '';
    // const container = document.createElement('div');
    // container.id = 'dynamic-page-container';
    // const title = document.createElement('h1');
    // title.innerText = '这是通过JavaScript动态创建的页面';
    // const paragraph = document.createElement('p');
    // paragraph.innerText = '您可以在这里添加更多的内容。';
    // container.appendChild(title);
    // container.appendChild(paragraph);
    // body.appendChild(container);

    // 创建并添加body中的元素
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
    // 引入JavaScript文件




  }

  document.addEventListener('DOMContentLoaded', createDynamicPage);