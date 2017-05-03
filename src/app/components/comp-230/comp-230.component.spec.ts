import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp230Component } from './comp-230.component';
import { Service230Service } from '../../services/service-230.service';

describe('Comp230Component', () => {
  let component: Comp230Component;
  let fixture: ComponentFixture<Comp230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp230Component ],
providers: [Service230Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
