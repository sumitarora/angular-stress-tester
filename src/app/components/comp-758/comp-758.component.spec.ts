import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp758Component } from './comp-758.component';
import { Service758Service } from '../../services/service-758.service';

describe('Comp758Component', () => {
  let component: Comp758Component;
  let fixture: ComponentFixture<Comp758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp758Component ],
providers: [Service758Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
