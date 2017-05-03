import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp506Component } from './comp-506.component';
import { Service506Service } from '../../services/service-506.service';

describe('Comp506Component', () => {
  let component: Comp506Component;
  let fixture: ComponentFixture<Comp506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp506Component ],
providers: [Service506Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
