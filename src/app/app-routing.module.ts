import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WellsComponent} from "./components/wells/wells.component";
import {WellsResolver} from "./components/wells/wells.resolver";

const routes: Routes = [
  {
    path: '',
    component: WellsComponent,
    resolve: {
      data: WellsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
