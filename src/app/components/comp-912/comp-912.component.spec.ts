import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp912Component } from './comp-912.component';
import { Service912Service } from '../../services/service-912.service';

describe('Comp912Component', () => {
  let component: Comp912Component;
  let fixture: ComponentFixture<Comp912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp912Component ],
providers: [Service912Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
