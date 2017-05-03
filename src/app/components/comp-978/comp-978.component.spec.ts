import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp978Component } from './comp-978.component';
import { Service978Service } from '../../services/service-978.service';

describe('Comp978Component', () => {
  let component: Comp978Component;
  let fixture: ComponentFixture<Comp978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp978Component ],
providers: [Service978Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
