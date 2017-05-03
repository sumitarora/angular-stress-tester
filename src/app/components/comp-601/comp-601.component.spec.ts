import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp601Component } from './comp-601.component';
import { Service601Service } from '../../services/service-601.service';

describe('Comp601Component', () => {
  let component: Comp601Component;
  let fixture: ComponentFixture<Comp601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp601Component ],
providers: [Service601Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
