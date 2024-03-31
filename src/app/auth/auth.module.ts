//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Ionic Modules
import { IonicModule } from '@ionic/angular';

// Routing Module
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, IonicModule, FormsModule, AuthRoutingModule],
})
export class AuthModule {}
