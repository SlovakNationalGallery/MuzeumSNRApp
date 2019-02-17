import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dokumenty',
  templateUrl: './dokumenty.page.html',
  styleUrls: ['./dokumenty.page.scss'],
})
export class DokumentyPage implements OnInit {

  pdf_files = [
    { year: "1847", title: "Reč Ľudovíta Štúra na Uhorskom sneme"},
    { year: "1848", title: "Žiadosti slovenského národa"},
    { year: "1918", title: "Rezolúcia"},
    { year: "1920", title: "Ústava Československej republiky"}
  ];


  files_per_row = 2;
  pdf_files_in_rows = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.pdf_files.length; i += this.files_per_row) {
      this.pdf_files_in_rows.push({ items: this.pdf_files.slice(i, i + this.files_per_row ) });
    }
  }

}
