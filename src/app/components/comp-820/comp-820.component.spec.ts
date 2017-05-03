import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp820Component } from './comp-820.component';
import { Service820Service } from '../../services/service-820.service';

describe('Comp820Component', () => {
  let component: Comp820Component;
  let fixture: ComponentFixture<Comp820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp820Component ],
providers: [Service820Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
