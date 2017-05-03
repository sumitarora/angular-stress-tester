import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp940Component } from './comp-940.component';
import { Service940Service } from '../../services/service-940.service';

describe('Comp940Component', () => {
  let component: Comp940Component;
  let fixture: ComponentFixture<Comp940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp940Component ],
providers: [Service940Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
