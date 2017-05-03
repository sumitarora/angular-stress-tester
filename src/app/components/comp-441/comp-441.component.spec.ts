import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp441Component } from './comp-441.component';
import { Service441Service } from '../../services/service-441.service';

describe('Comp441Component', () => {
  let component: Comp441Component;
  let fixture: ComponentFixture<Comp441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp441Component ],
providers: [Service441Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
