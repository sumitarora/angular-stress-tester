import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp682Component } from './comp-682.component';
import { Service682Service } from '../../services/service-682.service';

describe('Comp682Component', () => {
  let component: Comp682Component;
  let fixture: ComponentFixture<Comp682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp682Component ],
providers: [Service682Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
