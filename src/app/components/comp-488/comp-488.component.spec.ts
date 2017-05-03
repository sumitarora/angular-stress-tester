import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp488Component } from './comp-488.component';
import { Service488Service } from '../../services/service-488.service';

describe('Comp488Component', () => {
  let component: Comp488Component;
  let fixture: ComponentFixture<Comp488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp488Component ],
providers: [Service488Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
