import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp297Component } from './comp-297.component';
import { Service297Service } from '../../services/service-297.service';

describe('Comp297Component', () => {
  let component: Comp297Component;
  let fixture: ComponentFixture<Comp297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp297Component ],
providers: [Service297Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
