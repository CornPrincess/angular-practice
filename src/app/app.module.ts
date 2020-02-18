import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  // 组装模块资源：组件、指令、服务
  declarations: [
    AppComponent,
    HeroesComponent,
  ],
  // 导入依赖模块
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // 指定启动的根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
