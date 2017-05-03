import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp877Component } from './comp-877.component';
import { Service877Service } from '../../services/service-877.service';

describe('Comp877Component', () => {
  let component: Comp877Component;
  let fixture: ComponentFixture<Comp877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp877Component ],
providers: [Service877Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
