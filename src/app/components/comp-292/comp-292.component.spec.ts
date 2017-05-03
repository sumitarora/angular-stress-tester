import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp292Component } from './comp-292.component';
import { Service292Service } from '../../services/service-292.service';

describe('Comp292Component', () => {
  let component: Comp292Component;
  let fixture: ComponentFixture<Comp292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp292Component ],
providers: [Service292Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
