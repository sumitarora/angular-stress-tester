import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp237Component } from './comp-237.component';
import { Service237Service } from '../../services/service-237.service';

describe('Comp237Component', () => {
  let component: Comp237Component;
  let fixture: ComponentFixture<Comp237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp237Component ],
providers: [Service237Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
