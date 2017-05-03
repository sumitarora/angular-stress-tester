import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp98Component } from './comp-98.component';
import { Service98Service } from '../../services/service-98.service';

describe('Comp98Component', () => {
  let component: Comp98Component;
  let fixture: ComponentFixture<Comp98Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp98Component ],
providers: [Service98Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
