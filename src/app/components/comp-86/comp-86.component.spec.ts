import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp86Component } from './comp-86.component';
import { Service86Service } from '../../services/service-86.service';

describe('Comp86Component', () => {
  let component: Comp86Component;
  let fixture: ComponentFixture<Comp86Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp86Component ],
providers: [Service86Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
