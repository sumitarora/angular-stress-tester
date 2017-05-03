import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp68Component } from './comp-68.component';
import { Service68Service } from '../../services/service-68.service';

describe('Comp68Component', () => {
  let component: Comp68Component;
  let fixture: ComponentFixture<Comp68Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp68Component ],
providers: [Service68Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
