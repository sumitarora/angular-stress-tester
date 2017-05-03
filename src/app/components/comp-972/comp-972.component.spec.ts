import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp972Component } from './comp-972.component';
import { Service972Service } from '../../services/service-972.service';

describe('Comp972Component', () => {
  let component: Comp972Component;
  let fixture: ComponentFixture<Comp972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp972Component ],
providers: [Service972Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
