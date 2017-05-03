import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp919Component } from './comp-919.component';
import { Service919Service } from '../../services/service-919.service';

describe('Comp919Component', () => {
  let component: Comp919Component;
  let fixture: ComponentFixture<Comp919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp919Component ],
providers: [Service919Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
