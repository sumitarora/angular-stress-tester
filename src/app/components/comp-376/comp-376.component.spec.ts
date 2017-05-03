import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp376Component } from './comp-376.component';
import { Service376Service } from '../../services/service-376.service';

describe('Comp376Component', () => {
  let component: Comp376Component;
  let fixture: ComponentFixture<Comp376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp376Component ],
providers: [Service376Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
