import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp175Component } from './comp-175.component';
import { Service175Service } from '../../services/service-175.service';

describe('Comp175Component', () => {
  let component: Comp175Component;
  let fixture: ComponentFixture<Comp175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp175Component ],
providers: [Service175Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
