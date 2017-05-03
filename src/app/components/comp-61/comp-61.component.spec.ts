import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61Component } from './comp-61.component';
import { Service61Service } from '../../services/service-61.service';

describe('Comp61Component', () => {
  let component: Comp61Component;
  let fixture: ComponentFixture<Comp61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61Component ],
providers: [Service61Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
