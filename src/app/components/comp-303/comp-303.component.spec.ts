import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp303Component } from './comp-303.component';
import { Service303Service } from '../../services/service-303.service';

describe('Comp303Component', () => {
  let component: Comp303Component;
  let fixture: ComponentFixture<Comp303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp303Component ],
providers: [Service303Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
