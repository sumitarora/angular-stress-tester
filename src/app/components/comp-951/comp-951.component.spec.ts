import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp951Component } from './comp-951.component';
import { Service951Service } from '../../services/service-951.service';

describe('Comp951Component', () => {
  let component: Comp951Component;
  let fixture: ComponentFixture<Comp951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp951Component ],
providers: [Service951Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
