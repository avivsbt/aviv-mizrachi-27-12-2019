import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerService } from './spinner/spinner.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteDirective } from './favorite/favorite.directive';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        FontAwesomeModule,
        SpinnerComponent,
        FavoriteDirective,
        FavoriteComponent
    ],
    declarations: [
        SpinnerComponent,
        FavoriteComponent,
        FavoriteDirective,
    ],
    providers: [
        SpinnerService
    ],
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
