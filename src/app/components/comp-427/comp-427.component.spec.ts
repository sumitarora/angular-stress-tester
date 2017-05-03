import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp427Component } from './comp-427.component';
import { Service427Service } from '../../services/service-427.service';

describe('Comp427Component', () => {
  let component: Comp427Component;
  let fixture: ComponentFixture<Comp427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp427Component ],
providers: [Service427Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
