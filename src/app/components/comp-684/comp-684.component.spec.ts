import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp684Component } from './comp-684.component';
import { Service684Service } from '../../services/service-684.service';

describe('Comp684Component', () => {
  let component: Comp684Component;
  let fixture: ComponentFixture<Comp684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp684Component ],
providers: [Service684Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
