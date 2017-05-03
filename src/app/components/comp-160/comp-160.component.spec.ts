import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp160Component } from './comp-160.component';
import { Service160Service } from '../../services/service-160.service';

describe('Comp160Component', () => {
  let component: Comp160Component;
  let fixture: ComponentFixture<Comp160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp160Component ],
providers: [Service160Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
