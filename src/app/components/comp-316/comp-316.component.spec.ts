import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp316Component } from './comp-316.component';
import { Service316Service } from '../../services/service-316.service';

describe('Comp316Component', () => {
  let component: Comp316Component;
  let fixture: ComponentFixture<Comp316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp316Component ],
providers: [Service316Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
