import { Component, OnInit } from '@angular/core';
import osobnosti_data from '../../assets/data/osobnosti.json';

@Component({
  selector: 'app-osobnosti',
  templateUrl: './osobnosti.page.html',
  styleUrls: ['./osobnosti.page.scss'],
})
export class OsobnostiPage implements OnInit {

  osobnosti_data = [];
  data_per_row = 2;
  osobnosti_data_in_rows = [];

  constructor() { }

  ngOnInit() {
    // this.osobnosti_data = osobnosti_data;
    for (let i = 0; i < osobnosti_data.length; i += this.data_per_row) {
      this.osobnosti_data_in_rows.push({ items: osobnosti_data.slice(i, i + this.data_per_row ) });
    }
    console.log(this.osobnosti_data_in_rows);

  }

}
