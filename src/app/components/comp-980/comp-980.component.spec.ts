import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp980Component } from './comp-980.component';
import { Service980Service } from '../../services/service-980.service';

describe('Comp980Component', () => {
  let component: Comp980Component;
  let fixture: ComponentFixture<Comp980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp980Component ],
providers: [Service980Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
