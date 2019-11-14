import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCpComponent } from './article-cp.component';

describe('ArticleCpComponent', () => {
  let component: ArticleCpComponent;
  let fixture: ComponentFixture<ArticleCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
