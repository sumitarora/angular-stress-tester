import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp234Component } from './comp-234.component';
import { Service234Service } from '../../services/service-234.service';

describe('Comp234Component', () => {
  let component: Comp234Component;
  let fixture: ComponentFixture<Comp234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp234Component ],
providers: [Service234Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
