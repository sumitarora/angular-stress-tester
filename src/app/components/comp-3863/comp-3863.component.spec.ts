import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3863Component } from './comp-3863.component';

describe('Comp3863Component', () => {
  let component: Comp3863Component;
  let fixture: ComponentFixture<Comp3863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
