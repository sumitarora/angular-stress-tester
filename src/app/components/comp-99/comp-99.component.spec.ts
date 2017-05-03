import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp99Component } from './comp-99.component';
import { Service99Service } from '../../services/service-99.service';

describe('Comp99Component', () => {
  let component: Comp99Component;
  let fixture: ComponentFixture<Comp99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp99Component ],
providers: [Service99Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
