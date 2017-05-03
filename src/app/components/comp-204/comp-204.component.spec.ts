import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp204Component } from './comp-204.component';
import { Service204Service } from '../../services/service-204.service';

describe('Comp204Component', () => {
  let component: Comp204Component;
  let fixture: ComponentFixture<Comp204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp204Component ],
providers: [Service204Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
