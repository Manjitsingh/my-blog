import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListDetailsComponent } from './list-details/list-details.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: '',
    component: HomepageComponent,
    children: [{
      path: '',
      redirectTo: 'homepage',
      pathMatch: 'full'
    },{
        path: 'homepage',
        component: HomepageComponent
      },
    ]
  },
  {
    path: 'list',
    component: ListDetailsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
