import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4Component } from './comp-4.component';
import { Service4Service } from '../../services/service-4.service';

describe('Comp4Component', () => {
  let component: Comp4Component;
  let fixture: ComponentFixture<Comp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4Component ],
      providers: [Service4Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
