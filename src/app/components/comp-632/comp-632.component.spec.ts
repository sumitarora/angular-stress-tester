import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp632Component } from './comp-632.component';
import { Service632Service } from '../../services/service-632.service';

describe('Comp632Component', () => {
  let component: Comp632Component;
  let fixture: ComponentFixture<Comp632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp632Component ],
providers: [Service632Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
