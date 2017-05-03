import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp109Component } from './comp-109.component';
import { Service109Service } from '../../services/service-109.service';

describe('Comp109Component', () => {
  let component: Comp109Component;
  let fixture: ComponentFixture<Comp109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp109Component ],
providers: [Service109Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
