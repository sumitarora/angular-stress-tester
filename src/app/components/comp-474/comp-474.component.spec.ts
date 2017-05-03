import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp474Component } from './comp-474.component';
import { Service474Service } from '../../services/service-474.service';

describe('Comp474Component', () => {
  let component: Comp474Component;
  let fixture: ComponentFixture<Comp474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp474Component ],
providers: [Service474Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
