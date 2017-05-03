import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp149Component } from './comp-149.component';
import { Service149Service } from '../../services/service-149.service';

describe('Comp149Component', () => {
  let component: Comp149Component;
  let fixture: ComponentFixture<Comp149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp149Component ],
providers: [Service149Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
