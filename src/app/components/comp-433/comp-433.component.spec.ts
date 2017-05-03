import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp433Component } from './comp-433.component';
import { Service433Service } from '../../services/service-433.service';

describe('Comp433Component', () => {
  let component: Comp433Component;
  let fixture: ComponentFixture<Comp433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp433Component ],
providers: [Service433Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
