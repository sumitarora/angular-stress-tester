import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp557Component } from './comp-557.component';
import { Service557Service } from '../../services/service-557.service';

describe('Comp557Component', () => {
  let component: Comp557Component;
  let fixture: ComponentFixture<Comp557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp557Component ],
providers: [Service557Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
