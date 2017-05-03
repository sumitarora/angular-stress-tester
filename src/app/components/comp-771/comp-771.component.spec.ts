import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp771Component } from './comp-771.component';
import { Service771Service } from '../../services/service-771.service';

describe('Comp771Component', () => {
  let component: Comp771Component;
  let fixture: ComponentFixture<Comp771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp771Component ],
providers: [Service771Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
