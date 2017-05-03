import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp982Component } from './comp-982.component';
import { Service982Service } from '../../services/service-982.service';

describe('Comp982Component', () => {
  let component: Comp982Component;
  let fixture: ComponentFixture<Comp982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp982Component ],
providers: [Service982Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
