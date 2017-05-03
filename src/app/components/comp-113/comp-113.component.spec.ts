import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp113Component } from './comp-113.component';
import { Service113Service } from '../../services/service-113.service';

describe('Comp113Component', () => {
  let component: Comp113Component;
  let fixture: ComponentFixture<Comp113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp113Component ],
providers: [Service113Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
