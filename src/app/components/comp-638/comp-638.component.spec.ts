import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp638Component } from './comp-638.component';
import { Service638Service } from '../../services/service-638.service';

describe('Comp638Component', () => {
  let component: Comp638Component;
  let fixture: ComponentFixture<Comp638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp638Component ],
providers: [Service638Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
