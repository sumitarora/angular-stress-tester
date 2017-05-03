import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp634Component } from './comp-634.component';
import { Service634Service } from '../../services/service-634.service';

describe('Comp634Component', () => {
  let component: Comp634Component;
  let fixture: ComponentFixture<Comp634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp634Component ],
providers: [Service634Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
