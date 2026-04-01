import { Routes } from '@angular/router';

import { Home } from './componentes/home/home';
import { Pets } from './componentes/pets/pets';
import { Formulario } from './componentes/formulario/formulario';

export const routes: Routes = [
    { path:'' , component: Home } , 
    { path:'pets' , component: Pets } , 
    { path:'form' , component: Formulario }

];
