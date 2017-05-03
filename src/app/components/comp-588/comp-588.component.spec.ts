import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp588Component } from './comp-588.component';
import { Service588Service } from '../../services/service-588.service';

describe('Comp588Component', () => {
  let component: Comp588Component;
  let fixture: ComponentFixture<Comp588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp588Component ],
providers: [Service588Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
