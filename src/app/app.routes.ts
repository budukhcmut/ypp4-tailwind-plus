// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ProductList } from './product/pages/product-list/product-list';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
];
