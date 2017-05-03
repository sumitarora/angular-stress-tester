import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp954Component } from './comp-954.component';
import { Service954Service } from '../../services/service-954.service';

describe('Comp954Component', () => {
  let component: Comp954Component;
  let fixture: ComponentFixture<Comp954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp954Component ],
providers: [Service954Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
