import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp753Component } from './comp-753.component';
import { Service753Service } from '../../services/service-753.service';

describe('Comp753Component', () => {
  let component: Comp753Component;
  let fixture: ComponentFixture<Comp753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp753Component ],
providers: [Service753Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
