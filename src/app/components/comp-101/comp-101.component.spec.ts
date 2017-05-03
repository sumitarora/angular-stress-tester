import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp101Component } from './comp-101.component';
import { Service101Service } from '../../services/service-101.service';

describe('Comp101Component', () => {
  let component: Comp101Component;
  let fixture: ComponentFixture<Comp101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp101Component ],
providers: [Service101Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
