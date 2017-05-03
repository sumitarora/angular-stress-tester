import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp781Component } from './comp-781.component';
import { Service781Service } from '../../services/service-781.service';

describe('Comp781Component', () => {
  let component: Comp781Component;
  let fixture: ComponentFixture<Comp781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp781Component ],
providers: [Service781Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
