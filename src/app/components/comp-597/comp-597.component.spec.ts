import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp597Component } from './comp-597.component';
import { Service597Service } from '../../services/service-597.service';

describe('Comp597Component', () => {
  let component: Comp597Component;
  let fixture: ComponentFixture<Comp597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp597Component ],
providers: [Service597Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
