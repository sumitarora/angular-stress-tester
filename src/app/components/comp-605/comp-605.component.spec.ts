import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp605Component } from './comp-605.component';
import { Service605Service } from '../../services/service-605.service';

describe('Comp605Component', () => {
  let component: Comp605Component;
  let fixture: ComponentFixture<Comp605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp605Component ],
providers: [Service605Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
