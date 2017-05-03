import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp375Component } from './comp-375.component';
import { Service375Service } from '../../services/service-375.service';

describe('Comp375Component', () => {
  let component: Comp375Component;
  let fixture: ComponentFixture<Comp375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp375Component ],
providers: [Service375Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
