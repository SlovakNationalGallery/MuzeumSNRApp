import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import osobnosti_data from '../../assets/data/osobnosti.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-osobnosti-cards',
  templateUrl: './osobnosti-cards.page.html',
  styleUrls: ['./osobnosti-cards.page.scss'],
})
export class OsobnostiCardsPage implements OnInit {

  sliderConfig = {
    centeredSlides: true,
    spaceBetween: 0,
    slidesPerView: 1,
    initialSlide: 0
  };

  o_data = [];
  o_id: string;
  o_index: number;

  constructor(private route: ActivatedRoute, private platform: Platform) {}

  ngOnInit() {
    this.o_data = osobnosti_data;
    this.o_id = this.route.snapshot.paramMap.get('id');
    // console.log(this.o_id);
    this.o_index = osobnosti_data.findIndex(i => i.id === this.o_id);
    this.sliderConfig.initialSlide = this.o_index;
    if (this.platform.is('tablet') || this.platform.is('ipad')) {
      this.sliderConfig.spaceBetween = 10;
      this.sliderConfig.slidesPerView = 1.2;
    }
  }

}
