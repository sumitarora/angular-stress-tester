import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp888Component } from './comp-888.component';
import { Service888Service } from '../../services/service-888.service';

describe('Comp888Component', () => {
  let component: Comp888Component;
  let fixture: ComponentFixture<Comp888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp888Component ],
providers: [Service888Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
