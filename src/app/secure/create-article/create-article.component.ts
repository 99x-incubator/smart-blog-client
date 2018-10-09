import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  public articleImageFile = null;

  public articleContent;
  public articleTitle;
  public b64;
  public articleC;

  constructor(public articleService: ArticleService) { }

  ngOnInit() {
  }

  public onFileSelected(event) {
    // this.articleImageFile = event.target.files[0];

    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.b64 = reader.result
        console.log(this.b64);
        // need to run CD since file load runs outside of zone
        // this.cd.markForCheck();
      };
    }
  }

  public submitArticleInfo() {
    try {
      const article: any = {
        title: this.articleTitle,
        ownerPublicKey: "ddd",
        totalVotes: 10,
        poolAcc: {
          publickey: "fjfjf",
          privatekey: "ckfkf"
        },
        timestamp: Date.now(),
        image: this.b64,
        contribution: [{
          owner: "user name",
          content: this.articleContent,
          SHA256: "sndhcjdjd99e3838ehxn",
          upvotes: [{
            owner: "azkar",
            blogcoin: 10
          }],
          timestamp: Date.now(),
          txnID: "Xda%gavGFCzhRa4T"
        }]
      }
      this.articleService.addNewArticle(article);
    } catch (error) {
      console.log('please upload an image before publishing');
    }
  }
}
