import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp288Component } from './comp-288.component';
import { Service288Service } from '../../services/service-288.service';

describe('Comp288Component', () => {
  let component: Comp288Component;
  let fixture: ComponentFixture<Comp288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp288Component ],
providers: [Service288Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
