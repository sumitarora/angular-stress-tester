import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp117Component } from './comp-117.component';
import { Service117Service } from '../../services/service-117.service';

describe('Comp117Component', () => {
  let component: Comp117Component;
  let fixture: ComponentFixture<Comp117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp117Component ],
providers: [Service117Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
