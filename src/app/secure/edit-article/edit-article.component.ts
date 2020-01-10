import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  public articleId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.articleId = this.route.snapshot.params['id'];
  }

}
