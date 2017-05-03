import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp350Component } from './comp-350.component';
import { Service350Service } from '../../services/service-350.service';

describe('Comp350Component', () => {
  let component: Comp350Component;
  let fixture: ComponentFixture<Comp350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp350Component ],
providers: [Service350Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
