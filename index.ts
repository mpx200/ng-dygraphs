import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDygraphsComponent } from './src/ng-dygraphs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgDygraphsComponent
  ],
  exports: [
    NgDygraphsComponent
  ]
})
export class NgDygraphsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgDygraphsModule
    };
  }
}
