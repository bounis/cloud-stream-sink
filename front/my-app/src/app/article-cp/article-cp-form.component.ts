import {Component, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Article} from './Article';

@Component({
  selector: 'app-article-cp-add',
  templateUrl: './article-cp-add.component.html'
})
export class ArticleCpAddComponent {

  @Output() onSubmit: any;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({desc: ['abc']});
  }
  formSubmit() {
    // this.articles.push(new Article(this.articles[this.articles.length - 1].id + 1, this.myForm.controls.desc.value));
  }
}
