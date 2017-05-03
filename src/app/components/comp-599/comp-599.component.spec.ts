import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp599Component } from './comp-599.component';
import { Service599Service } from '../../services/service-599.service';

describe('Comp599Component', () => {
  let component: Comp599Component;
  let fixture: ComponentFixture<Comp599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp599Component ],
providers: [Service599Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
