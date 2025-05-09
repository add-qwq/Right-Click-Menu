// script.js
// 获取自定义菜单元素
const customMenu = document.getElementById('custom-menu');
let selectedText = '';

// 禁止默认右键菜单
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    // 记录选中的文本
    selectedText = window.getSelection().toString();

    // 显示自定义菜单
    customMenu.style.display = 'block';
    customMenu.style.left = e.pageX + 'px';
    customMenu.style.top = e.pageY + 'px';
});

// 点击其他区域隐藏自定义菜单
document.addEventListener('click', function (e) {
    if (!customMenu.contains(e.target)) {
        customMenu.style.display = 'none';
    }
});

// 复制文本功能
function copyText() {
    if (selectedText) {
        navigator.clipboard.writeText(selectedText).then(() => {
         }).catch((err) => {
            console.error('复制失败: ', err);
        });
    }
    customMenu.style.display = 'none';
}

// 粘贴文本功能
function pasteText() {
    navigator.clipboard.readText().then((clipboardText) => {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
            activeElement.value += clipboardText;
        }
    }).catch((err) => {
        console.error('粘贴失败: ', err);
    });
    customMenu.style.display = 'none';
}

// 刷新页面功能
function refreshPage() {
    location.reload();
}

// 返回主界面功能
function goToMain() {
    window.location.href = 'https:/rockaz.top/';
}