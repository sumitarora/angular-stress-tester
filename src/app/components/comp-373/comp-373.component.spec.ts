import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp373Component } from './comp-373.component';
import { Service373Service } from '../../services/service-373.service';

describe('Comp373Component', () => {
  let component: Comp373Component;
  let fixture: ComponentFixture<Comp373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp373Component ],
providers: [Service373Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
