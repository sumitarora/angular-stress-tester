import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp38Component } from './comp-38.component';
import { Service38Service } from '../../services/service-38.service';

describe('Comp38Component', () => {
  let component: Comp38Component;
  let fixture: ComponentFixture<Comp38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp38Component ],
providers: [Service38Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
