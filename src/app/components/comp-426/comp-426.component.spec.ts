import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp426Component } from './comp-426.component';
import { Service426Service } from '../../services/service-426.service';

describe('Comp426Component', () => {
  let component: Comp426Component;
  let fixture: ComponentFixture<Comp426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp426Component ],
providers: [Service426Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
