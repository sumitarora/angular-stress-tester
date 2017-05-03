import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp678Component } from './comp-678.component';
import { Service678Service } from '../../services/service-678.service';

describe('Comp678Component', () => {
  let component: Comp678Component;
  let fixture: ComponentFixture<Comp678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp678Component ],
providers: [Service678Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
