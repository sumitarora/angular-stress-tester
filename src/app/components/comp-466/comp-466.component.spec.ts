import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp466Component } from './comp-466.component';
import { Service466Service } from '../../services/service-466.service';

describe('Comp466Component', () => {
  let component: Comp466Component;
  let fixture: ComponentFixture<Comp466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp466Component ],
providers: [Service466Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
