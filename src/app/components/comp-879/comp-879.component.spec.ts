import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp879Component } from './comp-879.component';
import { Service879Service } from '../../services/service-879.service';

describe('Comp879Component', () => {
  let component: Comp879Component;
  let fixture: ComponentFixture<Comp879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp879Component ],
providers: [Service879Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
