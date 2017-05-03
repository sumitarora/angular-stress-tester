import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp7Component } from './comp-7.component';
import { Service7Service } from '../../services/service-7.service';

describe('Comp7Component', () => {
  let component: Comp7Component;
  let fixture: ComponentFixture<Comp7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp7Component ],
providers: [Service7Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
