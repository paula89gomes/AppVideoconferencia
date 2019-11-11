import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { NavController, AlertController } from '@ionic/angular';
import { ServidorProvider } from 'src/providers/servidor/servidor';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) {     //public servidor: ServidorProvider, public http: Http
  }

  ngOnInit() {
  }
  
  async logar(){

    if(this.email == undefined || this.senha == undefined)
    {
        const alert = await this.alertCtrl.create({
          header: 'Atenção',
          message: 'Usuário e senha são obrigatórios!',
          buttons: ['OK']
        })

        await alert.present();
    }else{
      /* this.http.get(this.servidor.urlGet() + '').pipe(map( res=> res.json()))
      .subscribe(
        dados => {
          
        }
      ) */
      if(this.email == 'teste@teste.com' && this.senha == '123')
      {
        this.router.navigate(['/home']);
        //this.navCtrl.setDirection(HomePage);

      }else{
        const alert = await this.alertCtrl.create({
          header: 'Atenção',
          message: 'Usuário inválido!',
          buttons: ['OK']
        })

        await alert.present();
      }

    }
  }
}
 