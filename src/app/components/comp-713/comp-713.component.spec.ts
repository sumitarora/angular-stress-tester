import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp713Component } from './comp-713.component';
import { Service713Service } from '../../services/service-713.service';

describe('Comp713Component', () => {
  let component: Comp713Component;
  let fixture: ComponentFixture<Comp713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp713Component ],
providers: [Service713Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
