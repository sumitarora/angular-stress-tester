import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp679Component } from './comp-679.component';
import { Service679Service } from '../../services/service-679.service';

describe('Comp679Component', () => {
  let component: Comp679Component;
  let fixture: ComponentFixture<Comp679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp679Component ],
providers: [Service679Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
