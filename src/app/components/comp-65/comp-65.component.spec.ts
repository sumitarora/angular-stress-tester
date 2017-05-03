import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp65Component } from './comp-65.component';
import { Service65Service } from '../../services/service-65.service';

describe('Comp65Component', () => {
  let component: Comp65Component;
  let fixture: ComponentFixture<Comp65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp65Component ],
providers: [Service65Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
