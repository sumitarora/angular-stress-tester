import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp863Component } from './comp-863.component';
import { Service863Service } from '../../services/service-863.service';

describe('Comp863Component', () => {
  let component: Comp863Component;
  let fixture: ComponentFixture<Comp863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp863Component ],
providers: [Service863Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
