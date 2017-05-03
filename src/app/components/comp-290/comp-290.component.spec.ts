import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp290Component } from './comp-290.component';
import { Service290Service } from '../../services/service-290.service';

describe('Comp290Component', () => {
  let component: Comp290Component;
  let fixture: ComponentFixture<Comp290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp290Component ],
providers: [Service290Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
