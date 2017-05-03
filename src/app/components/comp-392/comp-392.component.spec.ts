import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp392Component } from './comp-392.component';
import { Service392Service } from '../../services/service-392.service';

describe('Comp392Component', () => {
  let component: Comp392Component;
  let fixture: ComponentFixture<Comp392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp392Component ],
providers: [Service392Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
