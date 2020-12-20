import { Component, OnInit } from '@angular/core';
import { Sentences } from '../api/v1/sentences.model';
import { SentencesService } from '../api/v1/sentences.service';

@Component({
  selector: 'app-sentences-list',
  templateUrl: './sentences-list.component.html',
  styleUrls: ['./sentences-list.component.css']
})
export class SentencesListComponent implements OnInit {

  public sentences: Sentences;

  constructor(private sentencesService: SentencesService) { }

  ngOnInit(): void {
    this.sentencesService.getSentences().subscribe(sentences => {
      this.sentences = sentences;
    });
  }

}
