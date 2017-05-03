import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp486Component } from './comp-486.component';
import { Service486Service } from '../../services/service-486.service';

describe('Comp486Component', () => {
  let component: Comp486Component;
  let fixture: ComponentFixture<Comp486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp486Component ],
providers: [Service486Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
