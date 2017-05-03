import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp906Component } from './comp-906.component';
import { Service906Service } from '../../services/service-906.service';

describe('Comp906Component', () => {
  let component: Comp906Component;
  let fixture: ComponentFixture<Comp906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp906Component ],
providers: [Service906Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
