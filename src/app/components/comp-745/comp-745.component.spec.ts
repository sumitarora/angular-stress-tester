import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp745Component } from './comp-745.component';
import { Service745Service } from '../../services/service-745.service';

describe('Comp745Component', () => {
  let component: Comp745Component;
  let fixture: ComponentFixture<Comp745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp745Component ],
providers: [Service745Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
