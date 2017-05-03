import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp584Component } from './comp-584.component';
import { Service584Service } from '../../services/service-584.service';

describe('Comp584Component', () => {
  let component: Comp584Component;
  let fixture: ComponentFixture<Comp584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp584Component ],
providers: [Service584Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
