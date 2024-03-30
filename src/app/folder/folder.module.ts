//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Ionic Modules
import { IonicModule } from '@ionic/angular';

// Routing Module
import { FolderPageRoutingModule } from './folder-routing.module';

// Components
import { FolderPage } from './folder.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],
  declarations: [FolderPage],
})
export class FolderPageModule {}
