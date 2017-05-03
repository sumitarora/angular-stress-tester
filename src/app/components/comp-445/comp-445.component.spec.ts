import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp445Component } from './comp-445.component';
import { Service445Service } from '../../services/service-445.service';

describe('Comp445Component', () => {
  let component: Comp445Component;
  let fixture: ComponentFixture<Comp445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp445Component ],
providers: [Service445Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
