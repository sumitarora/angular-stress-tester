import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp643Component } from './comp-643.component';
import { Service643Service } from '../../services/service-643.service';

describe('Comp643Component', () => {
  let component: Comp643Component;
  let fixture: ComponentFixture<Comp643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp643Component ],
providers: [Service643Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
