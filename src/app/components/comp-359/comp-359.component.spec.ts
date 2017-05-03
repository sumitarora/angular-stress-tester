import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp359Component } from './comp-359.component';
import { Service359Service } from '../../services/service-359.service';

describe('Comp359Component', () => {
  let component: Comp359Component;
  let fixture: ComponentFixture<Comp359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp359Component ],
providers: [Service359Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
