import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/File/ngx';

import dokumenty_data from '../../assets/data/dokumenty.json';


@Component({
  selector: 'app-dokumenty',
  templateUrl: './dokumenty.page.html',
  styleUrls: ['./dokumenty.page.scss'],
})
export class DokumentyPage implements OnInit {

  files_per_row = 2;
  dokumenty_data_in_rows = [];

  constructor(private document: DocumentViewer, private file: File) {
  }

  ngOnInit() {
    for (let i = 0; i < dokumenty_data.length; i += this.files_per_row) {
      this.dokumenty_data_in_rows.push({ items: dokumenty_data.slice(i, i + this.files_per_row ) });
    }
  }

  openLocalPdf(docFile: string, docTitle: string) {

    let filePath = this.file.applicationDirectory + 'www/assets';

    const options: DocumentViewerOptions = {
      title: docTitle,
      documentView : {
        closeLabel : 'Zatvoriť'
      },
      navigationView : {
        closeLabel: 'Zatvoriť'
      },
      email : {
        enabled : false
      },
      print : {
        enabled : false
      },
      openWith : {
        enabled : false
      },
      bookmarks : {
        enabled: false
      },
      search : {
        enabled : true
      },
      autoClose: {
        onPause: false
      }
    };

    // this.document.viewDocument('/assets/pdf/KR_04_2006.pdf', 'application/pdf', options);
    this.document.viewDocument(`${filePath}/pdf/${docFile}`, 'application/pdf', options);

  }

}
