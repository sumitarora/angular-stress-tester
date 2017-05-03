import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp241Component } from './comp-241.component';
import { Service241Service } from '../../services/service-241.service';

describe('Comp241Component', () => {
  let component: Comp241Component;
  let fixture: ComponentFixture<Comp241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp241Component ],
providers: [Service241Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
