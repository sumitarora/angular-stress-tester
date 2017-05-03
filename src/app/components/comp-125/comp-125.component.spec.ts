import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp125Component } from './comp-125.component';
import { Service125Service } from '../../services/service-125.service';

describe('Comp125Component', () => {
  let component: Comp125Component;
  let fixture: ComponentFixture<Comp125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp125Component ],
providers: [Service125Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
