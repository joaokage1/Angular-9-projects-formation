import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRoutes //Concatenar arrays no TS
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}