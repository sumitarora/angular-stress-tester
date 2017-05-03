import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp522Component } from './comp-522.component';
import { Service522Service } from '../../services/service-522.service';

describe('Comp522Component', () => {
  let component: Comp522Component;
  let fixture: ComponentFixture<Comp522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp522Component ],
providers: [Service522Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
