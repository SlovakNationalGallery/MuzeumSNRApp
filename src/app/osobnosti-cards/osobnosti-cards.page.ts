import { Component, OnInit } from '@angular/core';
import osobnosti_data from '../../assets/data/osobnosti.json';

@Component({
  selector: 'app-osobnosti-cards',
  templateUrl: './osobnosti-cards.page.html',
  styleUrls: ['./osobnosti-cards.page.scss'],
})
export class OsobnostiCardsPage implements OnInit {

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.2
  };

  o_data = [];

  constructor() {
   }

  ngOnInit() {
    this.o_data = osobnosti_data;
  }

}
