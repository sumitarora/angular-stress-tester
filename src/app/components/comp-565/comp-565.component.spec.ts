import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp565Component } from './comp-565.component';
import { Service565Service } from '../../services/service-565.service';

describe('Comp565Component', () => {
  let component: Comp565Component;
  let fixture: ComponentFixture<Comp565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp565Component ],
providers: [Service565Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
