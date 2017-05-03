import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp693Component } from './comp-693.component';
import { Service693Service } from '../../services/service-693.service';

describe('Comp693Component', () => {
  let component: Comp693Component;
  let fixture: ComponentFixture<Comp693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp693Component ],
providers: [Service693Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
