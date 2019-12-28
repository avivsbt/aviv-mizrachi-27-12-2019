import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerService } from './spinner/spinner.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteDirective } from './favorite/favorite.directive';
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
        FavoriteDirective,
        FavoriteComponent,
        IconComponent,
        AlertComponent
    ],
    declarations: [
        SpinnerComponent,
        FavoriteComponent,
        FavoriteDirective,
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
