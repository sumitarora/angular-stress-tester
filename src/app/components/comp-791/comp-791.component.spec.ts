import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp791Component } from './comp-791.component';
import { Service791Service } from '../../services/service-791.service';

describe('Comp791Component', () => {
  let component: Comp791Component;
  let fixture: ComponentFixture<Comp791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp791Component ],
providers: [Service791Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
