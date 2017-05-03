import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp860Component } from './comp-860.component';
import { Service860Service } from '../../services/service-860.service';

describe('Comp860Component', () => {
  let component: Comp860Component;
  let fixture: ComponentFixture<Comp860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp860Component ],
providers: [Service860Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
