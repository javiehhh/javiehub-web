import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Projects } from './features/projects/projects';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';
import { Blog } from './features/blog/blog';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'projects',
        component: Projects
    },
    {
        path: 'blog',
        component: Blog
    },
    {
        path: 'about',
        component: About
    },
    {
        path:'contact',
        component: Contact
    }
];
