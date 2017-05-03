import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp591Component } from './comp-591.component';
import { Service591Service } from '../../services/service-591.service';

describe('Comp591Component', () => {
  let component: Comp591Component;
  let fixture: ComponentFixture<Comp591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp591Component ],
providers: [Service591Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
