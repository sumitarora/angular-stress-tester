import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp206Component } from './comp-206.component';
import { Service206Service } from '../../services/service-206.service';

describe('Comp206Component', () => {
  let component: Comp206Component;
  let fixture: ComponentFixture<Comp206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp206Component ],
providers: [Service206Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
