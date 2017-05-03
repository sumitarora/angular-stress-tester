import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp612Component } from './comp-612.component';
import { Service612Service } from '../../services/service-612.service';

describe('Comp612Component', () => {
  let component: Comp612Component;
  let fixture: ComponentFixture<Comp612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp612Component ],
providers: [Service612Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
