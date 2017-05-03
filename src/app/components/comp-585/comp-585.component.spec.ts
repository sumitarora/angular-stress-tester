import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp585Component } from './comp-585.component';
import { Service585Service } from '../../services/service-585.service';

describe('Comp585Component', () => {
  let component: Comp585Component;
  let fixture: ComponentFixture<Comp585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp585Component ],
providers: [Service585Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
