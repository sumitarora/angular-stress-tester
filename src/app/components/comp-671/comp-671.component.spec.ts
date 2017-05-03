import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp671Component } from './comp-671.component';
import { Service671Service } from '../../services/service-671.service';

describe('Comp671Component', () => {
  let component: Comp671Component;
  let fixture: ComponentFixture<Comp671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp671Component ],
providers: [Service671Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
