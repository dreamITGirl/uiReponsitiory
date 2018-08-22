# uiReponsitiory
平时工作中会用到很多这种组件;
其中文件夹css,js中的组件主要用于pc端,样式单位是px;
文件夹mobileCss,mobileJs 主要用于移动端，样式单位是rem;
主要是ui类库，方便组件式开发
#1、弹框 使用方法：
#依赖文件jquery，
自定义的css样式文件
使用方法：title--弹框的标题，可传空;
         message--弹框提示的内容
         buttonArr--按钮(可以是数组，如果是一个按钮，也可以是字符串)
 Example:
    var m = new AlertModel();
    m.render(title,message,buttonArr,id);
    m.showAlert('btn');
