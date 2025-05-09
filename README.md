English：

# Custom Right-Click Menu  


## Description  
This is a custom right-click menu implemented with HTML, JavaScript, and CSS. It replaces the default browser context menu with a personalized interface, supporting functions like text copying, pasting, page refreshing, and navigating back to the main interface. The menu features smooth animations, hover effects, and responsive positioning based on mouse coordinates.  


## Features  
- **Custom Context Menu**: Blocks the default browser right-click menu and displays a custom-designed menu.  
- **Text Operations**: Supports copying selected text and pasting clipboard content into input boxes or text areas.  
- **Page Control**: Includes a refresh button to reload the current page.  
- **Navigation**: Provides a "Return to Main Interface" option to jump to a specified URL.  
- **Stylish Design**: Uses CSS animations (fade-in effect), hover scaling, and a modern box shadow for better visual experience.  


## File Structure  
```  
├── rcm.html       # Main HTML file (separate from CSS/JS)  
├── rcm.js         # JavaScript logic (menu control, function implementation)  
├── rcm.css        # CSS styles (menu layout, animations, hover effects)  
└── integration.html # All-in-one version (CSS/JS embedded in HTML)  
```  


## Usage  
1. **Direct Deployment**:  
   - Download all files (or use `integration.html` directly).  
   - Open `rcm.html` or `integration.html` in a browser. Right-click anywhere to trigger the custom menu.  

2. **Customization**:  
   - Modify `rcm.css` to adjust colors, sizes, or animations.  
   - Edit `rcm.js` to add/remove menu items or update functions (e.g., change the main interface URL in `goToMain()`).  


## Compatibility  
Works on modern browsers (Chrome, Firefox, Edge, Safari) that support the `navigator.clipboard` API. Older browsers may have limited functionality (e.g., text pasting).  


---
中文：

# 自定义右键菜单  


## 描述  
这是一个使用 HTML、JavaScript 和 CSS 实现的自定义右键菜单。它通过自定义界面替代了浏览器默认的右键菜单，支持文本复制、粘贴、页面刷新和返回主界面等功能。菜单具备流畅的动画效果、悬停交互以及基于鼠标坐标的响应式定位。  


## 功能特性  
- **自定义右键菜单**：屏蔽浏览器默认右键菜单，展示自主设计的菜单界面。  
- **文本操作**：支持复制选中的文本，以及将剪贴板内容粘贴到输入框或文本域中。  
- **页面控制**：包含刷新按钮，可重新加载当前页面。  
- **导航功能**：提供“返回主界面”选项，跳转至指定 URL。  
- **美观设计**：通过 CSS 动画（淡入效果）、悬停缩放和现代阴影效果提升视觉体验。  


## 文件结构  
```  
├── rcm.html       # 主 HTML 文件（与 CSS/JS 分离）  
├── rcm.js         # JavaScript 逻辑（菜单控制、功能实现）  
├── rcm.css        # CSS 样式（菜单布局、动画、悬停效果）  
└── integration.html # 整合版本（CSS/JS 嵌入 HTML 中）  
```  


## 使用方法  
1. **直接部署**：  
   - 下载所有文件（或直接使用 `integration.html`）。  
   - 在浏览器中打开 `rcm.html` 或 `integration.html`，右键点击任意位置触发自定义菜单。  

2. **自定义调整**：  
   - 修改 `rcm.css` 调整颜色、尺寸或动画效果。  
   - 编辑 `rcm.js` 增删菜单项或修改功能（如调整 `goToMain()` 中的主界面 URL）。  


## 兼容性  
支持支持 `navigator.clipboard` API 的现代浏览器（Chrome、Firefox、Edge、Safari）。旧版浏览器可能部分功能受限（如文本粘贴）。
