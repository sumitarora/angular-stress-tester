import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp936Component } from './comp-936.component';
import { Service936Service } from '../../services/service-936.service';

describe('Comp936Component', () => {
  let component: Comp936Component;
  let fixture: ComponentFixture<Comp936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp936Component ],
providers: [Service936Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
