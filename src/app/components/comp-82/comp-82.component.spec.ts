import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp82Component } from './comp-82.component';
import { Service82Service } from '../../services/service-82.service';

describe('Comp82Component', () => {
  let component: Comp82Component;
  let fixture: ComponentFixture<Comp82Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp82Component ],
providers: [Service82Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
