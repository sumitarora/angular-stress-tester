import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp729Component } from './comp-729.component';
import { Service729Service } from '../../services/service-729.service';

describe('Comp729Component', () => {
  let component: Comp729Component;
  let fixture: ComponentFixture<Comp729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp729Component ],
providers: [Service729Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
