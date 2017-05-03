import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp369Component } from './comp-369.component';
import { Service369Service } from '../../services/service-369.service';

describe('Comp369Component', () => {
  let component: Comp369Component;
  let fixture: ComponentFixture<Comp369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp369Component ],
providers: [Service369Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
