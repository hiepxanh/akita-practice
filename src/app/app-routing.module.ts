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
        path: 'login',
        loadChildren: './views/login/login.module#LoginModule'
    },
    {
        path: 'products',
        loadChildren: './views/products/products.module#ProductsModule'
    },
    {
        path: 'cart',
        loadChildren: './views/cart/cart.module#CartModule'
    },
    {
        path: 'playbook',
        loadChildren: './views/playbook/playbook.module#PlaybookModule'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        // { enableTracing: true }
    )],
    exports: [RouterModule]
})

export class AppRoutingModule {

}