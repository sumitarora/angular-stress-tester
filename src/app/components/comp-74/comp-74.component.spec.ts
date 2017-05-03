import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp74Component } from './comp-74.component';
import { Service74Service } from '../../services/service-74.service';

describe('Comp74Component', () => {
  let component: Comp74Component;
  let fixture: ComponentFixture<Comp74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp74Component ],
providers: [Service74Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
