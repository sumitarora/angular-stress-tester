import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp245Component } from './comp-245.component';
import { Service245Service } from '../../services/service-245.service';

describe('Comp245Component', () => {
  let component: Comp245Component;
  let fixture: ComponentFixture<Comp245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp245Component ],
providers: [Service245Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
