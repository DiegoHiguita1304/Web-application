import { Routes } from '@angular/router';

import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import {HeaderComponent} from './domains/shared/components/header/header.component'

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
    }
];
