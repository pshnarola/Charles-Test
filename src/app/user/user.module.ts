import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ListComponent,
        EditComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule
    ]
})
export class UserModule { }
