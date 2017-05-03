import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp662Component } from './comp-662.component';
import { Service662Service } from '../../services/service-662.service';

describe('Comp662Component', () => {
  let component: Comp662Component;
  let fixture: ComponentFixture<Comp662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp662Component ],
providers: [Service662Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
