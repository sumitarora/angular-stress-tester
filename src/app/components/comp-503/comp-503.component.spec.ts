import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp503Component } from './comp-503.component';
import { Service503Service } from '../../services/service-503.service';

describe('Comp503Component', () => {
  let component: Comp503Component;
  let fixture: ComponentFixture<Comp503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp503Component ],
providers: [Service503Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
