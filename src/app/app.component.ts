import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { AuthenticationService } from './_services/auth/authentication.service';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar
    private authServ: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      this.authServ.login("ali").then(res => {
        console.log(res)
      })
      // setTimeout(() => {
      //   this.authServ.checkToken().then(res => {
      //     console.log(res)
      //   })
      // }, 2000)
    });
  }
}
