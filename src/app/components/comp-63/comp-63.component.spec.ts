import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp63Component } from './comp-63.component';
import { Service63Service } from '../../services/service-63.service';

describe('Comp63Component', () => {
  let component: Comp63Component;
  let fixture: ComponentFixture<Comp63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp63Component ],
providers: [Service63Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
