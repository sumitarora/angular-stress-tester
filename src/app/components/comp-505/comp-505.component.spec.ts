import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp505Component } from './comp-505.component';
import { Service505Service } from '../../services/service-505.service';

describe('Comp505Component', () => {
  let component: Comp505Component;
  let fixture: ComponentFixture<Comp505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp505Component ],
providers: [Service505Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
