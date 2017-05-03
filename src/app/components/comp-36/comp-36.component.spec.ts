import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp36Component } from './comp-36.component';
import { Service36Service } from '../../services/service-36.service';

describe('Comp36Component', () => {
  let component: Comp36Component;
  let fixture: ComponentFixture<Comp36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp36Component ],
providers: [Service36Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
