//Angular modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DigimonGridComponent } from './digimon-grid/digimon-grid.component';

const routes: Routes = [
  {
    path: '',
    component: DigimonGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigimonRoutingModule {}
