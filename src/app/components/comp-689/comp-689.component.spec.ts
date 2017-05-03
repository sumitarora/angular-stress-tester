import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp689Component } from './comp-689.component';
import { Service689Service } from '../../services/service-689.service';

describe('Comp689Component', () => {
  let component: Comp689Component;
  let fixture: ComponentFixture<Comp689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp689Component ],
providers: [Service689Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
