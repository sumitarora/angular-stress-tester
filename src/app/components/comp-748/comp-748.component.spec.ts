import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp748Component } from './comp-748.component';
import { Service748Service } from '../../services/service-748.service';

describe('Comp748Component', () => {
  let component: Comp748Component;
  let fixture: ComponentFixture<Comp748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp748Component ],
providers: [Service748Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
