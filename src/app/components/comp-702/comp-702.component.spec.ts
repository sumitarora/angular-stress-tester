import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp702Component } from './comp-702.component';
import { Service702Service } from '../../services/service-702.service';

describe('Comp702Component', () => {
  let component: Comp702Component;
  let fixture: ComponentFixture<Comp702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp702Component ],
providers: [Service702Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
