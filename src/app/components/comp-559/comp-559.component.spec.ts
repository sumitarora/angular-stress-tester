import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp559Component } from './comp-559.component';
import { Service559Service } from '../../services/service-559.service';

describe('Comp559Component', () => {
  let component: Comp559Component;
  let fixture: ComponentFixture<Comp559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp559Component ],
providers: [Service559Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
