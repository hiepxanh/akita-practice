import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./views/login/guard/auth.guard";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    },
    {
        path: 'home',
        canActivate: [ AuthGuard ],
        loadChildren: './views/home/home.module#HomeModule'
    },
    {
        path: 'todos',
        loadChildren: './views/todos/todos.module#TodosModule'
    },
    {
        path: 'books',
        loadChildren: './views/books/books.module#BooksModule'
    },
    {
        path: 'pizzas',
        loadChildren: './views/pizzas/pizzas.module#PizzasModule'
    },
    {
        path: 'products',
        loadChildren: './views/products/products.module#ProductsModule'
    },
    {
        path: 'login',
        loadChildren: './views/login/login.module#LoginModule'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: true }
    )],
    exports: [RouterModule]
})

export class AppRoutingModule {

}