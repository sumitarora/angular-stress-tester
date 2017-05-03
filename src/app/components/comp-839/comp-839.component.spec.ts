import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp839Component } from './comp-839.component';
import { Service839Service } from '../../services/service-839.service';

describe('Comp839Component', () => {
  let component: Comp839Component;
  let fixture: ComponentFixture<Comp839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp839Component ],
providers: [Service839Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
