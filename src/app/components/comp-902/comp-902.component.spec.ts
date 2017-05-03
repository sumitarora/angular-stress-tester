import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp902Component } from './comp-902.component';
import { Service902Service } from '../../services/service-902.service';

describe('Comp902Component', () => {
  let component: Comp902Component;
  let fixture: ComponentFixture<Comp902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp902Component ],
providers: [Service902Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
