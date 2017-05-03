import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp57Component } from './comp-57.component';
import { Service57Service } from '../../services/service-57.service';

describe('Comp57Component', () => {
  let component: Comp57Component;
  let fixture: ComponentFixture<Comp57Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp57Component ],
providers: [Service57Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
