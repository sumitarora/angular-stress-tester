import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp210Component } from './comp-210.component';
import { Service210Service } from '../../services/service-210.service';

describe('Comp210Component', () => {
  let component: Comp210Component;
  let fixture: ComponentFixture<Comp210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp210Component ],
providers: [Service210Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
