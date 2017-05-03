import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp25Component } from './comp-25.component';
import { Service25Service } from '../../services/service-25.service';

describe('Comp25Component', () => {
  let component: Comp25Component;
  let fixture: ComponentFixture<Comp25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp25Component ],
providers: [Service25Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
