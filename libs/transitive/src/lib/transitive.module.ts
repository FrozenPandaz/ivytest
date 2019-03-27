import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderlyingModule } from '@ivytest/underlying';

@NgModule({
  imports: [CommonModule, UnderlyingModule],
  exports: [UnderlyingModule]
})
export class TransitiveModule {}
