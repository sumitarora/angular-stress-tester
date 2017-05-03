import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp300Component } from './comp-300.component';
import { Service300Service } from '../../services/service-300.service';

describe('Comp300Component', () => {
  let component: Comp300Component;
  let fixture: ComponentFixture<Comp300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp300Component ],
providers: [Service300Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
