import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp513Component } from './comp-513.component';
import { Service513Service } from '../../services/service-513.service';

describe('Comp513Component', () => {
  let component: Comp513Component;
  let fixture: ComponentFixture<Comp513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp513Component ],
providers: [Service513Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
