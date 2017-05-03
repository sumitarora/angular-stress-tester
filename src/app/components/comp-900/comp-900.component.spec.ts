import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp900Component } from './comp-900.component';
import { Service900Service } from '../../services/service-900.service';

describe('Comp900Component', () => {
  let component: Comp900Component;
  let fixture: ComponentFixture<Comp900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp900Component ],
providers: [Service900Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
