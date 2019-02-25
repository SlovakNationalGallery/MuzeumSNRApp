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
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.2,
    initialSlide: 0
    // hashNavigation: {
    //   watchState: true
    // }
  };

  o_data = [];
  o_id: string;
  o_index: number;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.o_data = osobnosti_data;
    this.o_id = this.route.snapshot.paramMap.get('id');
    // console.log(this.o_id);
    this.o_index = osobnosti_data.findIndex(i => i.id === this.o_id);
    this.sliderConfig.initialSlide = this.o_index;
  }

}
