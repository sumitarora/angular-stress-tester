import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp414Component } from './comp-414.component';
import { Service414Service } from '../../services/service-414.service';

describe('Comp414Component', () => {
  let component: Comp414Component;
  let fixture: ComponentFixture<Comp414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp414Component ],
providers: [Service414Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
