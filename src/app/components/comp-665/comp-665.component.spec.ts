import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp665Component } from './comp-665.component';
import { Service665Service } from '../../services/service-665.service';

describe('Comp665Component', () => {
  let component: Comp665Component;
  let fixture: ComponentFixture<Comp665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp665Component ],
providers: [Service665Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
