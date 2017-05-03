import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp670Component } from './comp-670.component';
import { Service670Service } from '../../services/service-670.service';

describe('Comp670Component', () => {
  let component: Comp670Component;
  let fixture: ComponentFixture<Comp670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp670Component ],
providers: [Service670Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
