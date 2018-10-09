import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public articleId;
  public articleTitle;
  public articleContent;
  public articleAuthor;

  articleInfo = [
    {
      articleId: 1,
      userName : 'Raveen',
      articleTitle : 'What is block chain',
      content: 'This is all about block chain'
    }, 

    {
      articleId: 2,
      userName : 'Azkar',
      articleTitle: 'Why do we need computers?',
      content: 'This is why we need computers'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.articleId = this.route.snapshot.params['id'];

    this.articleInfo.forEach(element => {
      if(element.articleId == this.articleId) {
        this.articleTitle = element.articleTitle;
        this.articleContent = element.content;
        this.articleAuthor = element.userName;
      }
    });
  }

}
