import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp261Component } from './comp-261.component';
import { Service261Service } from '../../services/service-261.service';

describe('Comp261Component', () => {
  let component: Comp261Component;
  let fixture: ComponentFixture<Comp261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp261Component ],
providers: [Service261Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
