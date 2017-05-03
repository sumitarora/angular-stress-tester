import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp881Component } from './comp-881.component';
import { Service881Service } from '../../services/service-881.service';

describe('Comp881Component', () => {
  let component: Comp881Component;
  let fixture: ComponentFixture<Comp881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp881Component ],
providers: [Service881Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
