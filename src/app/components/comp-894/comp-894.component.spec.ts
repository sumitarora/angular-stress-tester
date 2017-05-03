import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp894Component } from './comp-894.component';
import { Service894Service } from '../../services/service-894.service';

describe('Comp894Component', () => {
  let component: Comp894Component;
  let fixture: ComponentFixture<Comp894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp894Component ],
providers: [Service894Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
