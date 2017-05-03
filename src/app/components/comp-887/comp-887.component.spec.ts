import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp887Component } from './comp-887.component';
import { Service887Service } from '../../services/service-887.service';

describe('Comp887Component', () => {
  let component: Comp887Component;
  let fixture: ComponentFixture<Comp887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp887Component ],
providers: [Service887Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
