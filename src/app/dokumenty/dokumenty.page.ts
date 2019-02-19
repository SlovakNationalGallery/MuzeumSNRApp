import { Component, OnInit } from '@angular/core';
import pdf_files from './dokumenty.json';
import { Platform } from '@ionic/angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/File/ngx';

@Component({
  selector: 'app-dokumenty',
  templateUrl: './dokumenty.page.html',
  styleUrls: ['./dokumenty.page.scss'],
})
export class DokumentyPage implements OnInit {

  files_per_row = 2;
  pdf_files_in_rows = [];

  constructor(private document: DocumentViewer, private file: File) {
    // console.log(pdf_files);
  }

  ngOnInit() {
    for (let i = 0; i < pdf_files.length; i += this.files_per_row) {
      this.pdf_files_in_rows.push({ items: pdf_files.slice(i, i + this.files_per_row ) });
    }
  }

  openLocalPdf () {

    let filePath = this.file.applicationDirectory + 'www/assets';

    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };

    // this.document.viewDocument('/assets/pdf/KR_04_2006.pdf', 'application/pdf', options);
    this.document.viewDocument(`${filePath}/pdf/KR_04_2006.pdf`, 'application/pdf', options);

  }

}
