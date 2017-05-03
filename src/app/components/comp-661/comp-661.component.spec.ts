import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp661Component } from './comp-661.component';
import { Service661Service } from '../../services/service-661.service';

describe('Comp661Component', () => {
  let component: Comp661Component;
  let fixture: ComponentFixture<Comp661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp661Component ],
providers: [Service661Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
