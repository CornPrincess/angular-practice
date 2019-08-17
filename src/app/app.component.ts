import { Component } from '@angular/core';

// @Component 组件的装饰器
// selector 用来定义组件渲染的标签名称，可以理解为组件的名字

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
  count = 1;
  increment = function() {
    this.count++;
  };
}
