import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp460Component } from './comp-460.component';
import { Service460Service } from '../../services/service-460.service';

describe('Comp460Component', () => {
  let component: Comp460Component;
  let fixture: ComponentFixture<Comp460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp460Component ],
providers: [Service460Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
