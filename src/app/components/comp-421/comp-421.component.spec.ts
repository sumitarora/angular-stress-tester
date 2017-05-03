import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp421Component } from './comp-421.component';
import { Service421Service } from '../../services/service-421.service';

describe('Comp421Component', () => {
  let component: Comp421Component;
  let fixture: ComponentFixture<Comp421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp421Component ],
providers: [Service421Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
