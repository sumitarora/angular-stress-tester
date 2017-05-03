import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp171Component } from './comp-171.component';
import { Service171Service } from '../../services/service-171.service';

describe('Comp171Component', () => {
  let component: Comp171Component;
  let fixture: ComponentFixture<Comp171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp171Component ],
providers: [Service171Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
