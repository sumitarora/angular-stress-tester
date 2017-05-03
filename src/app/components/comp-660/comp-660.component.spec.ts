import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp660Component } from './comp-660.component';
import { Service660Service } from '../../services/service-660.service';

describe('Comp660Component', () => {
  let component: Comp660Component;
  let fixture: ComponentFixture<Comp660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp660Component ],
providers: [Service660Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
