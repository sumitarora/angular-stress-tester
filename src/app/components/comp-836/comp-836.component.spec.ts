import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp836Component } from './comp-836.component';
import { Service836Service } from '../../services/service-836.service';

describe('Comp836Component', () => {
  let component: Comp836Component;
  let fixture: ComponentFixture<Comp836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp836Component ],
providers: [Service836Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
