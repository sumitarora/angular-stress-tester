import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp742Component } from './comp-742.component';
import { Service742Service } from '../../services/service-742.service';

describe('Comp742Component', () => {
  let component: Comp742Component;
  let fixture: ComponentFixture<Comp742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp742Component ],
providers: [Service742Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
