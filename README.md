# uiReponsitiory
平时工作中会用到很多这种组件
主要是ui类库，方便组件式开发
#1、弹框 使用方法：
  依赖文件jquery，
  自定义的css样式文件
  使用方法：title--弹框的标题，可传空;
           message--弹框提示的内容
           buttonArr--按钮(可以是数组，如果是一个按钮，也可以是字符串)
  var m = new AlertModel();
  m.render(title,message,buttonArr,id);
  m.showAlert('btn');
