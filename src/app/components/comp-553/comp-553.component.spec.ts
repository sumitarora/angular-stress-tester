import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp553Component } from './comp-553.component';
import { Service553Service } from '../../services/service-553.service';

describe('Comp553Component', () => {
  let component: Comp553Component;
  let fixture: ComponentFixture<Comp553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp553Component ],
providers: [Service553Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
