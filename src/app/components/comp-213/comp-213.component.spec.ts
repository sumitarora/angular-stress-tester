import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp213Component } from './comp-213.component';
import { Service213Service } from '../../services/service-213.service';

describe('Comp213Component', () => {
  let component: Comp213Component;
  let fixture: ComponentFixture<Comp213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp213Component ],
providers: [Service213Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
