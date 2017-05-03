import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp556Component } from './comp-556.component';
import { Service556Service } from '../../services/service-556.service';

describe('Comp556Component', () => {
  let component: Comp556Component;
  let fixture: ComponentFixture<Comp556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp556Component ],
providers: [Service556Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
