import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp37Component } from './comp-37.component';
import { Service37Service } from '../../services/service-37.service';

describe('Comp37Component', () => {
  let component: Comp37Component;
  let fixture: ComponentFixture<Comp37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp37Component ],
providers: [Service37Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
