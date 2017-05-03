import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp211Component } from './comp-211.component';
import { Service211Service } from '../../services/service-211.service';

describe('Comp211Component', () => {
  let component: Comp211Component;
  let fixture: ComponentFixture<Comp211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp211Component ],
providers: [Service211Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
