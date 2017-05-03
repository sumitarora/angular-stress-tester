import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp813Component } from './comp-813.component';
import { Service813Service } from '../../services/service-813.service';

describe('Comp813Component', () => {
  let component: Comp813Component;
  let fixture: ComponentFixture<Comp813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp813Component ],
providers: [Service813Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
