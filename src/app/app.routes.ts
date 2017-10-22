import { NotfoundComponent } from './public/pages/notfound/notfound.component';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' } //always last
  ];
  
  export const AppRoutes = RouterModule.forRoot(appRoutes, { 
    useHash: true
  });