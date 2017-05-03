import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp476Component } from './comp-476.component';
import { Service476Service } from '../../services/service-476.service';

describe('Comp476Component', () => {
  let component: Comp476Component;
  let fixture: ComponentFixture<Comp476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp476Component ],
providers: [Service476Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
