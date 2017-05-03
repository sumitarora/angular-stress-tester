import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp370Component } from './comp-370.component';
import { Service370Service } from '../../services/service-370.service';

describe('Comp370Component', () => {
  let component: Comp370Component;
  let fixture: ComponentFixture<Comp370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp370Component ],
providers: [Service370Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
