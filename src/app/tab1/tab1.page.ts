import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import homeData from '../../assets/data/home.json';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  videos = [];
  segments: any[] = [];
  constructor() {
    this.segments = [
      'All',
      'New to you',
      'Gaming',
      'Sitcoms',
      'Computer program',
      'Documentary',
      'Music',
    ].map((val) => ({ title: val, selected: false }));
    console.log('segments', this.segments);

    setTimeout(() => {
      this.selectSegment(0);
      this.videos = homeData;
    }, 5000);
  }
  selectSegment(index) {
    this.segments.map((seg, ind) => {
      if (index === ind) {
        seg.selected = true;
      } else {
        seg.selected = false;
      }
    });
  }
  doRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }
}
