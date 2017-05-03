import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp398Component } from './comp-398.component';
import { Service398Service } from '../../services/service-398.service';

describe('Comp398Component', () => {
  let component: Comp398Component;
  let fixture: ComponentFixture<Comp398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp398Component ],
providers: [Service398Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
