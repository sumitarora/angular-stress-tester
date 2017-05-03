import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp564Component } from './comp-564.component';
import { Service564Service } from '../../services/service-564.service';

describe('Comp564Component', () => {
  let component: Comp564Component;
  let fixture: ComponentFixture<Comp564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp564Component ],
providers: [Service564Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
