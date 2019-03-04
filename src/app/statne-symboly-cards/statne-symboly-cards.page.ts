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
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.2,
    initialSlide: 0
    // hashNavigation: {
    //   watchState: true
    // }
  };

  s_data = [];
  s_id: string;
  s_index: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.s_data = symboly_data;
    this.s_id = this.route.snapshot.paramMap.get('id');
    // console.log(this.s_id);
    this.s_index = symboly_data.findIndex(i => i.id === this.s_id);
    this.sliderConfig.initialSlide = this.s_index;
  }

}
