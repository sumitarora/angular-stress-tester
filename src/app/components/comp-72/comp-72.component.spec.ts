import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp72Component } from './comp-72.component';
import { Service72Service } from '../../services/service-72.service';

describe('Comp72Component', () => {
  let component: Comp72Component;
  let fixture: ComponentFixture<Comp72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp72Component ],
providers: [Service72Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
