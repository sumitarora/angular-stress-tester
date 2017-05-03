import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp746Component } from './comp-746.component';
import { Service746Service } from '../../services/service-746.service';

describe('Comp746Component', () => {
  let component: Comp746Component;
  let fixture: ComponentFixture<Comp746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp746Component ],
providers: [Service746Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
