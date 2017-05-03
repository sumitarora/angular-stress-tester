import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp857Component } from './comp-857.component';
import { Service857Service } from '../../services/service-857.service';

describe('Comp857Component', () => {
  let component: Comp857Component;
  let fixture: ComponentFixture<Comp857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp857Component ],
providers: [Service857Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
