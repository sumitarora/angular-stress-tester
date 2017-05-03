import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp140Component } from './comp-140.component';
import { Service140Service } from '../../services/service-140.service';

describe('Comp140Component', () => {
  let component: Comp140Component;
  let fixture: ComponentFixture<Comp140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp140Component ],
providers: [Service140Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
