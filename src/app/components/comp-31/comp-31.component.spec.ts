import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp31Component } from './comp-31.component';
import { Service31Service } from '../../services/service-31.service';

describe('Comp31Component', () => {
  let component: Comp31Component;
  let fixture: ComponentFixture<Comp31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp31Component ],
providers: [Service31Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
