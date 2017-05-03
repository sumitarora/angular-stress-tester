import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp986Component } from './comp-986.component';
import { Service986Service } from '../../services/service-986.service';

describe('Comp986Component', () => {
  let component: Comp986Component;
  let fixture: ComponentFixture<Comp986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp986Component ],
providers: [Service986Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
