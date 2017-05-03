import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp132Component } from './comp-132.component';
import { Service132Service } from '../../services/service-132.service';

describe('Comp132Component', () => {
  let component: Comp132Component;
  let fixture: ComponentFixture<Comp132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp132Component ],
providers: [Service132Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
