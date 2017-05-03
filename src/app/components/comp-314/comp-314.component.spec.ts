import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp314Component } from './comp-314.component';
import { Service314Service } from '../../services/service-314.service';

describe('Comp314Component', () => {
  let component: Comp314Component;
  let fixture: ComponentFixture<Comp314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp314Component ],
providers: [Service314Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
