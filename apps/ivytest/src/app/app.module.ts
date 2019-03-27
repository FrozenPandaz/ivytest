import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SomeModule } from '@ivytest/some';
import { TransitiveModule } from '@ivytest/transitive';

import { AppComponent } from './app.component';
import { RelativeComponent } from './relative/relative.component';

@NgModule({
  declarations: [AppComponent, RelativeComponent],
  imports: [BrowserModule, SomeModule, TransitiveModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
