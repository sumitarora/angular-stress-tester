import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp734Component } from './comp-734.component';
import { Service734Service } from '../../services/service-734.service';

describe('Comp734Component', () => {
  let component: Comp734Component;
  let fixture: ComponentFixture<Comp734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp734Component ],
providers: [Service734Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
