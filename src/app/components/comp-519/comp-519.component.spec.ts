import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp519Component } from './comp-519.component';
import { Service519Service } from '../../services/service-519.service';

describe('Comp519Component', () => {
  let component: Comp519Component;
  let fixture: ComponentFixture<Comp519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp519Component ],
providers: [Service519Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
