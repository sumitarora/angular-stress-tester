import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp695Component } from './comp-695.component';
import { Service695Service } from '../../services/service-695.service';

describe('Comp695Component', () => {
  let component: Comp695Component;
  let fixture: ComponentFixture<Comp695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp695Component ],
providers: [Service695Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
