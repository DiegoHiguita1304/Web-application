import { Routes } from '@angular/router';

import { ListComponent } from '@products/pages/list/list.component';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import {HeaderComponent} from '@shared/components/header/header.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }

];
