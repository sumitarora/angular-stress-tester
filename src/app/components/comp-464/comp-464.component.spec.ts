import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp464Component } from './comp-464.component';
import { Service464Service } from '../../services/service-464.service';

describe('Comp464Component', () => {
  let component: Comp464Component;
  let fixture: ComponentFixture<Comp464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp464Component ],
providers: [Service464Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
