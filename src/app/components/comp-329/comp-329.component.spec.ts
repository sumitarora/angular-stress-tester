import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp329Component } from './comp-329.component';
import { Service329Service } from '../../services/service-329.service';

describe('Comp329Component', () => {
  let component: Comp329Component;
  let fixture: ComponentFixture<Comp329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp329Component ],
providers: [Service329Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
