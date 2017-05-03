import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp258Component } from './comp-258.component';
import { Service258Service } from '../../services/service-258.service';

describe('Comp258Component', () => {
  let component: Comp258Component;
  let fixture: ComponentFixture<Comp258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp258Component ],
providers: [Service258Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
