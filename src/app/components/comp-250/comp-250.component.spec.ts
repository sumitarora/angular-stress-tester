import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp250Component } from './comp-250.component';
import { Service250Service } from '../../services/service-250.service';

describe('Comp250Component', () => {
  let component: Comp250Component;
  let fixture: ComponentFixture<Comp250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp250Component ],
providers: [Service250Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
