import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp507Component } from './comp-507.component';
import { Service507Service } from '../../services/service-507.service';

describe('Comp507Component', () => {
  let component: Comp507Component;
  let fixture: ComponentFixture<Comp507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp507Component ],
providers: [Service507Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
