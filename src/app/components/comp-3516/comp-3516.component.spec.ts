import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3516Component } from './comp-3516.component';

describe('Comp3516Component', () => {
  let component: Comp3516Component;
  let fixture: ComponentFixture<Comp3516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
