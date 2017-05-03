import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp926Component } from './comp-926.component';
import { Service926Service } from '../../services/service-926.service';

describe('Comp926Component', () => {
  let component: Comp926Component;
  let fixture: ComponentFixture<Comp926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp926Component ],
providers: [Service926Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
