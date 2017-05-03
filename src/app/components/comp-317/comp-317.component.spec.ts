import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp317Component } from './comp-317.component';
import { Service317Service } from '../../services/service-317.service';

describe('Comp317Component', () => {
  let component: Comp317Component;
  let fixture: ComponentFixture<Comp317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp317Component ],
providers: [Service317Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
