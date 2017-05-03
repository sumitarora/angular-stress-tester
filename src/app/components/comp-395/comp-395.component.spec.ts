import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp395Component } from './comp-395.component';
import { Service395Service } from '../../services/service-395.service';

describe('Comp395Component', () => {
  let component: Comp395Component;
  let fixture: ComponentFixture<Comp395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp395Component ],
providers: [Service395Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
