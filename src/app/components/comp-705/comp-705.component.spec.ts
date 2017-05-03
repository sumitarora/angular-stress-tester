import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp705Component } from './comp-705.component';
import { Service705Service } from '../../services/service-705.service';

describe('Comp705Component', () => {
  let component: Comp705Component;
  let fixture: ComponentFixture<Comp705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp705Component ],
providers: [Service705Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
