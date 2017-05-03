import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp744Component } from './comp-744.component';
import { Service744Service } from '../../services/service-744.service';

describe('Comp744Component', () => {
  let component: Comp744Component;
  let fixture: ComponentFixture<Comp744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp744Component ],
providers: [Service744Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
