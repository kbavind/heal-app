import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NewsapiService } from 'src/app/services/newsapi/newsapi.service';

@Component({
  selector: 'app-new-letters',
  templateUrl: './new-letters.page.html',
  styleUrls: ['./new-letters.page.scss'],
})
export class NewLettersPage implements OnInit {

  articles: any

  constructor(
    private newsapiService: NewsapiService,
    private navCtrl: NavController) { 
    this.loadNews()
  }

  ngOnInit() {
  }

  loadNews() {
    this.newsapiService.getNews("top-headlines?country=us&category=health").subscribe( news => {
      this.articles = news['articles'];
      console.log(this.articles)
    });
  }

  backToHome() {
    this.navCtrl.navigateForward('/tabs/home');
  }

}
