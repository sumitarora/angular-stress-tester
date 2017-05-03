import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp259Component } from './comp-259.component';
import { Service259Service } from '../../services/service-259.service';

describe('Comp259Component', () => {
  let component: Comp259Component;
  let fixture: ComponentFixture<Comp259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp259Component ],
providers: [Service259Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
