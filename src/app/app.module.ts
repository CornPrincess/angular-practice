import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { TooComponent } from './foo/too/too.component';

@NgModule({
  // 组装模块资源：组件、指令、服务
  declarations: [
    AppComponent,
    FooComponent,
    TooComponent
  ],
  imports: [
    // 导入依赖模块
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // 指定启动的根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
