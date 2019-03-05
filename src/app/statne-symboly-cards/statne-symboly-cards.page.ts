import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import symboly_data from '../../assets/data/statne-symboly.json';

@Component({
  selector: 'app-statne-symboly-cards',
  templateUrl: './statne-symboly-cards.page.html',
  styleUrls: ['./statne-symboly-cards.page.scss'],
})
export class StatneSymbolyCardsPage implements OnInit {

  sliderConfig = {
    centeredSlides: true,
    spaceBetween: 0,
    slidesPerView: 1,
    initialSlide: 0
  };

  s_data = [];
  s_id: string;
  s_index: number;

  constructor(private route: ActivatedRoute, private platform: Platform) { }

  ngOnInit() {
    this.s_data = symboly_data;
    this.s_id = this.route.snapshot.paramMap.get('id');
    this.s_index = symboly_data.findIndex(i => i.id === this.s_id);
    this.sliderConfig.initialSlide = this.s_index;
    if (this.platform.is('tablet')) {
      this.sliderConfig.spaceBetween = 10;
      this.sliderConfig.slidesPerView = 1.2;
    }
  }

}
