import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp459Component } from './comp-459.component';
import { Service459Service } from '../../services/service-459.service';

describe('Comp459Component', () => {
  let component: Comp459Component;
  let fixture: ComponentFixture<Comp459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp459Component ],
providers: [Service459Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
