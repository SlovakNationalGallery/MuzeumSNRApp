import { Component, OnInit } from '@angular/core';
import pdf_files from './dokumenty.json';

@Component({
  selector: 'app-dokumenty',
  templateUrl: './dokumenty.page.html',
  styleUrls: ['./dokumenty.page.scss'],
})
export class DokumentyPage implements OnInit {

  files_per_row = 2;
  pdf_files_in_rows = [];

  constructor() {
    // console.log(pdf_files);
  }

  ngOnInit() {
    for (let i = 0; i < pdf_files.length; i += this.files_per_row) {
      this.pdf_files_in_rows.push({ items: pdf_files.slice(i, i + this.files_per_row ) });
    }
  }

}
