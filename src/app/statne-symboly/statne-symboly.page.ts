import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import symboly_data from '../../assets/data/statne-symboly.json';

@Component({
  selector: 'app-statne-symboly',
  templateUrl: './statne-symboly.page.html',
  styleUrls: ['./statne-symboly.page.scss'],
})
export class StatneSymbolyPage implements OnInit {

  symboly_data = [];
  data_per_row = 2;
  symboly_data_in_rows = [];
  symboly_data_by_year = [];

  constructor() { }

  ngOnInit() {
    this.symboly_data = symboly_data;
    this.symboly_data_by_year = _.groupBy(symboly_data, "year");
    console.log(this.symboly_data_by_year);

    for (let i = 0; i < symboly_data.length; i += this.data_per_row) {
      this.symboly_data_in_rows.push({ items: symboly_data.slice(i, i + this.data_per_row ) });
    }
  }

}
