import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {createCustomElement} from '@angular/elements';
import {MadeComponent} from './made/made.component';
import {UtilsModule} from './utils/utils.module';
import {CommonModule} from '@angular/common';
import {BadgeComponent} from './badge-label/badge.component';
import {LabelComponent} from './badge-label/label.component';
import {FormsModule} from '@angular/forms';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {CalendarComponent} from './calendar/calendar.component';
import {PopoverComponent} from './popover/popover.component';
import {ButtonDirective} from './button/button.directive';
import {IconDirective} from './icon/icon.directive';
import {PopoverBodyComponent} from './popover/popover-body.component';
import {PopoverControlComponent} from './popover/popover-control.component';
import {InputGroupComponent} from './input-group/input-group.component';
import {InputGroupNumberComponent} from './input-group/input-group-number.component';
import {InputGroupSearchComponent} from './input-group/input-group-search.component';

@NgModule({
    declarations: [
        MadeComponent,
        BadgeComponent,
        LabelComponent,
        CalendarComponent,
        PopoverComponent,
        ButtonDirective,
        IconDirective,
        DatePickerComponent,
        PopoverBodyComponent,
        PopoverControlComponent,
        InputGroupComponent,
        InputGroupNumberComponent,
        InputGroupSearchComponent
    ],
    imports: [
        BrowserModule,
        UtilsModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
    entryComponents: [
        MadeComponent,
        BadgeComponent,
        LabelComponent,
        DatePickerComponent
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

        const datePicker = createCustomElement(DatePickerComponent, {injector});
        customElements.define('made-for-datepicker', datePicker);
    }

    ngDoBootstrap() {
    }
}
