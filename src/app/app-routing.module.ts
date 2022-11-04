import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ReactiveFormsModule
    ],

    exports:[
        RouterModule
    ]
})



export class AppRoutingModule {

}