import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp512Component } from './comp-512.component';
import { Service512Service } from '../../services/service-512.service';

describe('Comp512Component', () => {
  let component: Comp512Component;
  let fixture: ComponentFixture<Comp512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp512Component ],
providers: [Service512Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
