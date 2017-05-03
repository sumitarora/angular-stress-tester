import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp62Component } from './comp-62.component';
import { Service62Service } from '../../services/service-62.service';

describe('Comp62Component', () => {
  let component: Comp62Component;
  let fixture: ComponentFixture<Comp62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp62Component ],
providers: [Service62Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
