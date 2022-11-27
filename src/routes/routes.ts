import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
//import { LazyLayout } from '../01-lazyload/layout/LazyLayout';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))
//const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
//const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage" */'../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        to: '/lazyload/', 
        path: '/lazyload/*', //con el comidon /* le indico que todas las paginas que quiero que se carguen con lazy pasen por el path /ladyload
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]