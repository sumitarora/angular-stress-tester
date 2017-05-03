import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp725Component } from './comp-725.component';
import { Service725Service } from '../../services/service-725.service';

describe('Comp725Component', () => {
  let component: Comp725Component;
  let fixture: ComponentFixture<Comp725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp725Component ],
providers: [Service725Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
