import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp571Component } from './comp-571.component';
import { Service571Service } from '../../services/service-571.service';

describe('Comp571Component', () => {
  let component: Comp571Component;
  let fixture: ComponentFixture<Comp571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp571Component ],
providers: [Service571Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
