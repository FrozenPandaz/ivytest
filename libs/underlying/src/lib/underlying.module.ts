import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ivytest-underlying',
  template: 'Underlying works!'
})
export class UnderlyingComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [UnderlyingComponent],
  exports: [UnderlyingComponent]
})
export class UnderlyingModule {}
