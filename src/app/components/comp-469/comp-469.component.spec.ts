import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp469Component } from './comp-469.component';
import { Service469Service } from '../../services/service-469.service';

describe('Comp469Component', () => {
  let component: Comp469Component;
  let fixture: ComponentFixture<Comp469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp469Component ],
providers: [Service469Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
