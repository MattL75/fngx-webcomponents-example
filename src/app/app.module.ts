import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {createCustomElement} from '@angular/elements';
import {MadeComponent} from './made/made.component';
import {UtilsModule} from './utils/utils.module';
import {CommonModule} from '@angular/common';
import {BadgeComponent} from './badge-label/badge.component';
import {LabelComponent} from './badge-label/label.component';

@NgModule({
    declarations: [
        MadeComponent,
        BadgeComponent,
        LabelComponent,
    ],
    imports: [
        BrowserModule,
        UtilsModule,
        CommonModule
    ],
    providers: [],
    entryComponents: [
        MadeComponent,
        BadgeComponent,
        LabelComponent
    ]
})
export class AppModule {
    constructor(private injector: Injector) {
        const made = createCustomElement(MadeComponent, {injector});
        customElements.define('made-for-fun', made);

        const badge = createCustomElement(BadgeComponent, {injector});
        customElements.define('made-for-badge', badge);

        const label = createCustomElement(LabelComponent, {injector});
        customElements.define('made-for-label', label);
    }

    ngDoBootstrap() {
    }
}
