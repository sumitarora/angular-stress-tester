import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp358Component } from './comp-358.component';
import { Service358Service } from '../../services/service-358.service';

describe('Comp358Component', () => {
  let component: Comp358Component;
  let fixture: ComponentFixture<Comp358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp358Component ],
providers: [Service358Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
