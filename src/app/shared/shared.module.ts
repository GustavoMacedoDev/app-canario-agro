import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    MascaraDirective,
    RadioComponent,
    InputComponent,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective, RadioComponent, InputComponent, PhonePipe
  ],
  providers: []
})
export class SharedModule { }
