import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http : HttpClient,private loadCtrl : LoadingController) {}

  dataPOST = [];

  loading : any;

  async getDataPost()
  {
    this.loading = await this.loaderPresent();

    this.http.get("https://reqres.in/api/users?page=2").subscribe((res:any)=>{
      console.log(res.data);
      this.dataPOST = res.data;
      if(this.loading)
      {
        this.loading.dismiss();
      }
    });
  }

  ionViewDidEnter()
  {
    this.getDataPost();
  }

  public async loaderPresent() : Promise<any> 
  {
    const loading = await this.loadCtrl.create({
      message : "LOADING ...",
      backdropDismiss : true
    });
    await loading.present();
    
    return loading;
  }
 

  



}
