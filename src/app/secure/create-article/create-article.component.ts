import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  public selectedFile = null;

  public articleContent;
  public articleTitle;

  articleContentFromHtml;

  constructor() { }

  ngOnInit() {
  }

  public onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  public submitArticleInfo() {
    console.log(this.articleTitle);
    console.log(this.articleContent);
    try {
      console.log(this.selectedFile.name)
    } catch (error) {
      console.log('please upload an image before publishing');
    }
    
  }



}
