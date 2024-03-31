import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model = new Usuario('Tony', 'tonyveas@hotmail.com', '111111');
  isLoading = false;
  isOpen = false;
  mensaje = '';

  public alertButtons = [
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.isOpen = false;
        console.log('Alert confirmed');
      },
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    /*this.route.queryParams.subscribe((params) => {
      if (params['oobCode']) {
        const code = params['oobCode'];
        // this.verifyEmail(code);
      }
    });*/
  }

  loginUser(user: Usuario) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.mail, user.password)
      .then((userCredential) => {
        if (userCredential.user) {
          if (userCredential.user.emailVerified) {
            this.isLoading = false;
            console.log('Email is verified11111');
            setTimeout(() => {
              this.router.navigate(['/digimon']);
            }, 0);
            // Aquí puedes redirigir al usuario a la página principal de tu aplicación
          } else {
            console.log('Email is not verified');
            this.mensaje = 'Primero debe verificar su correo, por favor.';
            this.isLoading = false;
            this.isOpen = true;
            // Aquí puedes mostrar un mensaje al usuario indicando que debe verificar su correo electrónico
          }
        }
      })
      .catch((error) => {
        console.log('CODE: ', error.code);
        if (error.code === 'auth/invalid-credential') {
          this.mensaje =
            'Las credenciales son inválidas, verifíquelas por favor.';
          this.isLoading = false;
          this.isOpen = true;
        } else {
          console.error('Error logging in user', error);
        }
      });
  }

  /*async verifyEmail(code: string) {
    try {
      // await this.afAuth.auth.applyActionCode(code);
      const auth = getAuth();

      // auth.
      await applyActionCode(auth, code);
      console.log('Code: ', code);
      console.log('Email verification successful');
    } catch (error) {
      console.error('Error verifying email', error);
    }
  }*/

  ngOnInit() {
    console.log('Executing ngOnInit() method - LoginComponent');
  }

  onSubmit() {
    this.isLoading = true;
    this.loginUser(this.model);
    /*this.authService.registerUser(this.model).subscribe((user) => {
      console.log('Sucess!: ', user);
      this.isLoading = false;
      this.isOpen = true;
    });
    console.log('Data send: ', this.model);*/
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
}
