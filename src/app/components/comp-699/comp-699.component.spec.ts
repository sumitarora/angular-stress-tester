import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp699Component } from './comp-699.component';
import { Service699Service } from '../../services/service-699.service';

describe('Comp699Component', () => {
  let component: Comp699Component;
  let fixture: ComponentFixture<Comp699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp699Component ],
providers: [Service699Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
