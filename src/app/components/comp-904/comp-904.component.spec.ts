import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp904Component } from './comp-904.component';
import { Service904Service } from '../../services/service-904.service';

describe('Comp904Component', () => {
  let component: Comp904Component;
  let fixture: ComponentFixture<Comp904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp904Component ],
providers: [Service904Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
