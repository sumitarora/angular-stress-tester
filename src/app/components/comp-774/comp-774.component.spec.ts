import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp774Component } from './comp-774.component';
import { Service774Service } from '../../services/service-774.service';

describe('Comp774Component', () => {
  let component: Comp774Component;
  let fixture: ComponentFixture<Comp774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp774Component ],
providers: [Service774Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
