import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp325Component } from './comp-325.component';
import { Service325Service } from '../../services/service-325.service';

describe('Comp325Component', () => {
  let component: Comp325Component;
  let fixture: ComponentFixture<Comp325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp325Component ],
providers: [Service325Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
