import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    },
    {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
    },
    {
        path: 'todos',
        loadChildren: './views/todos/todos.module#TodosModule'
    },
    {
        path: 'books',
        loadChildren: './views/books/books.module#BooksModule'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}