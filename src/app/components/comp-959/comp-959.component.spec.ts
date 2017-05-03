import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp959Component } from './comp-959.component';
import { Service959Service } from '../../services/service-959.service';

describe('Comp959Component', () => {
  let component: Comp959Component;
  let fixture: ComponentFixture<Comp959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp959Component ],
providers: [Service959Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
