import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp8Component } from './comp-8.component';
import { Service8Service } from '../../services/service-8.service';

describe('Comp8Component', () => {
  let component: Comp8Component;
  let fixture: ComponentFixture<Comp8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp8Component ],
providers: [Service8Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
