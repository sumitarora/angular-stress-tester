import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp859Component } from './comp-859.component';
import { Service859Service } from '../../services/service-859.service';

describe('Comp859Component', () => {
  let component: Comp859Component;
  let fixture: ComponentFixture<Comp859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp859Component ],
providers: [Service859Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
