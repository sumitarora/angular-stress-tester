import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp134Component } from './comp-134.component';
import { Service134Service } from '../../services/service-134.service';

describe('Comp134Component', () => {
  let component: Comp134Component;
  let fixture: ComponentFixture<Comp134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp134Component ],
providers: [Service134Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
