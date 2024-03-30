//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic Modules
import { IonicModule } from '@ionic/angular';

// Routing Module
import { DigimonRoutingModule } from './digimon-routing.module';

// Components
import { DigimonGridComponent } from './digimon-grid/digimon-grid.component';

@NgModule({
  imports: [CommonModule, IonicModule, DigimonRoutingModule],
  declarations: [DigimonGridComponent],
})
export class DigimonModule {}
