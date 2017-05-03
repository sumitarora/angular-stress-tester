import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp399Component } from './comp-399.component';
import { Service399Service } from '../../services/service-399.service';

describe('Comp399Component', () => {
  let component: Comp399Component;
  let fixture: ComponentFixture<Comp399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp399Component ],
providers: [Service399Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
