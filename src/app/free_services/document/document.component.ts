import { Component, OnInit } from '@angular/core';
import { Docs } from '../shared/models/docs';
import { DocsService } from '../shared/services/docs.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  files: Docs[] = [];

  constructor(private file: DocsService) { }

  ngOnInit(): void {
    this.file.getFile().subscribe({
      next: files => this.files = files
    })
  }

}
