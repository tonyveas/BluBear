import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {
  getAuth,
  // isSignInWithEmailLink,
  // signInWithEmailLink,
  // verifyPasswordResetCode,
  // applyActionCode,
  updateProfile,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}
  model = new Usuario('Tony', 'tonyveas@hotmail.com', '111111');
  isOpen = false;
  isOpenError = false;
  isLoading = false;
  mensaje = '';

  ngOnInit() {
    console.log('Executing ngOnInit() method - RegisterComponent');
  }

  onSubmit() {
    this.isLoading = true;
    this.registerUser(this.model);
    console.log('Data send: ', this.model);
  }

  registerUser(user: Usuario) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.mail, user.password)
      .then((userCredential) => {
        if (userCredential.user) {
          // Actualizar el perfil del usuario para incluir el nombre
          return updateProfile(userCredential.user, {
            displayName: user.name, // Asegúrate de que 'name' es la propiedad correcta en tu objeto 'Usuario'
          }).then(() => {
            // Después de actualizar el perfil, envía el correo electrónico de verificación
            console.log('userCredential: ', userCredential);
            return sendEmailVerification(userCredential.user);
          });
        } else {
          return;
        }
      })
      .then(() => {
        console.log('Verification email sent');
        this.isLoading = false;
        this.mensaje = 'Revise su correo para activar su cuenta, por favor.';
        this.isOpen = true;
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          this.isLoading = false;
          this.isOpenError = true;
        } else {
          console.error('Error registering user', error);
        }
      });
  }

  public alertButtons = [
    // {
    //   text: 'Cancel',
    //   role: 'cancel',
    //   handler: () => {
    //     console.log('Alert canceled');
    //   },
    // },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.router.navigate(
          ['/auth/login']
          // , {
          //   queryParams: { color: 'blue', type: 'A' },
          // }
        );
        this.isOpen = false;
      },
    },
  ];

  public alertButtonsError = [
    // {
    //   text: 'Cancel',
    //   role: 'cancel',
    //   handler: () => {
    //     console.log('Alert canceled');
    //   },
    // },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.isOpenError = false;
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  setResultError(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  /*

  onSubmit() {
    this.isLoading = true;
    this.authService.registerUser(this.model).subscribe((user) => {
      console.log('Sucess!: ', user);
      this.isLoading = false;
      this.isOpen = true;
    });
    console.log('Data send: ', this.model);
  }

  */
}
