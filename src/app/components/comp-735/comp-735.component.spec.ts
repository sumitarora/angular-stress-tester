import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp735Component } from './comp-735.component';
import { Service735Service } from '../../services/service-735.service';

describe('Comp735Component', () => {
  let component: Comp735Component;
  let fixture: ComponentFixture<Comp735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp735Component ],
providers: [Service735Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
