import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp16Component } from './comp-16.component';
import { Service16Service } from '../../services/service-16.service';

describe('Comp16Component', () => {
  let component: Comp16Component;
  let fixture: ComponentFixture<Comp16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp16Component ],
providers: [Service16Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
