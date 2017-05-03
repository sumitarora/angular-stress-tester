import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3Component } from './comp-3.component';
import { Service3Service } from '../../services/service-3.service';

describe('Comp3Component', () => {
  let component: Comp3Component;
  let fixture: ComponentFixture<Comp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3Component ],
      providers: [Service3Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
