import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp515Component } from './comp-515.component';
import { Service515Service } from '../../services/service-515.service';

describe('Comp515Component', () => {
  let component: Comp515Component;
  let fixture: ComponentFixture<Comp515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp515Component ],
providers: [Service515Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
