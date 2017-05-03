import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp788Component } from './comp-788.component';
import { Service788Service } from '../../services/service-788.service';

describe('Comp788Component', () => {
  let component: Comp788Component;
  let fixture: ComponentFixture<Comp788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp788Component ],
providers: [Service788Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
