import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp20Component } from './comp-20.component';
import { Service20Service } from '../../services/service-20.service';

describe('Comp20Component', () => {
  let component: Comp20Component;
  let fixture: ComponentFixture<Comp20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp20Component ],
providers: [Service20Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
