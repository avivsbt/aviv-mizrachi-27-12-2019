import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from './spinner/spinner.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { IconComponent } from './icon/icon.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        FontAwesomeModule,
        SpinnerComponent,
        FavoriteComponent,
        IconComponent,
        AlertComponent
    ],
    declarations: [
        SpinnerComponent,
        FavoriteComponent,
        IconComponent,
        AlertComponent
    ],
    providers: [],
    entryComponents: []
})
export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [],
        };
    }
}
