import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp477Component } from './comp-477.component';
import { Service477Service } from '../../services/service-477.service';

describe('Comp477Component', () => {
  let component: Comp477Component;
  let fixture: ComponentFixture<Comp477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp477Component ],
providers: [Service477Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
