import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp618Component } from './comp-618.component';
import { Service618Service } from '../../services/service-618.service';

describe('Comp618Component', () => {
  let component: Comp618Component;
  let fixture: ComponentFixture<Comp618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp618Component ],
providers: [Service618Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
