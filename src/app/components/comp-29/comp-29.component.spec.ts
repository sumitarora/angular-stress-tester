import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp29Component } from './comp-29.component';
import { Service29Service } from '../../services/service-29.service';

describe('Comp29Component', () => {
  let component: Comp29Component;
  let fixture: ComponentFixture<Comp29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp29Component ],
providers: [Service29Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
