import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp197Component } from './comp-197.component';
import { Service197Service } from '../../services/service-197.service';

describe('Comp197Component', () => {
  let component: Comp197Component;
  let fixture: ComponentFixture<Comp197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp197Component ],
providers: [Service197Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
