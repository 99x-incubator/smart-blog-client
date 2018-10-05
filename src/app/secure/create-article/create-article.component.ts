import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  private selectedFile = null;
  private articleContent = null;

  constructor() { }

  ngOnInit() {
  }

  public onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

}
