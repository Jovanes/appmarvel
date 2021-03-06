import { Component } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

usuario: Usuario = new Usuario();

  login(){
this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
() => { this.router.navigate(['pagina']); }
).catch( (erro) => console.log(erro) );

  }


  logout() {
this.afAuth.auth.signOut();
this.router.navigate(['/']);

  }

}
