import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp504Component } from './comp-504.component';
import { Service504Service } from '../../services/service-504.service';

describe('Comp504Component', () => {
  let component: Comp504Component;
  let fixture: ComponentFixture<Comp504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp504Component ],
providers: [Service504Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
