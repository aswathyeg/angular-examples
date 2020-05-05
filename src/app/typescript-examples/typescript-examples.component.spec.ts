import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptExamplesComponent } from './typescript-examples.component';

describe('TypescriptExamplesComponent', () => {
  let component: TypescriptExamplesComponent;
  let fixture: ComponentFixture<TypescriptExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
