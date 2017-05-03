import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp777Component } from './comp-777.component';
import { Service777Service } from '../../services/service-777.service';

describe('Comp777Component', () => {
  let component: Comp777Component;
  let fixture: ComponentFixture<Comp777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp777Component ],
providers: [Service777Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
