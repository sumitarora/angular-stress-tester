import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp878Component } from './comp-878.component';
import { Service878Service } from '../../services/service-878.service';

describe('Comp878Component', () => {
  let component: Comp878Component;
  let fixture: ComponentFixture<Comp878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp878Component ],
providers: [Service878Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
