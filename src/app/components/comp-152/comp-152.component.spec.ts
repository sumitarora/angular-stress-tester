import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp152Component } from './comp-152.component';
import { Service152Service } from '../../services/service-152.service';

describe('Comp152Component', () => {
  let component: Comp152Component;
  let fixture: ComponentFixture<Comp152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp152Component ],
providers: [Service152Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
