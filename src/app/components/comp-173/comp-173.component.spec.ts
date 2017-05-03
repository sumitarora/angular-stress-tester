import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp173Component } from './comp-173.component';
import { Service173Service } from '../../services/service-173.service';

describe('Comp173Component', () => {
  let component: Comp173Component;
  let fixture: ComponentFixture<Comp173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp173Component ],
providers: [Service173Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
