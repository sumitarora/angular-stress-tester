import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp222Component } from './comp-222.component';
import { Service222Service } from '../../services/service-222.service';

describe('Comp222Component', () => {
  let component: Comp222Component;
  let fixture: ComponentFixture<Comp222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp222Component ],
providers: [Service222Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
