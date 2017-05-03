import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp837Component } from './comp-837.component';
import { Service837Service } from '../../services/service-837.service';

describe('Comp837Component', () => {
  let component: Comp837Component;
  let fixture: ComponentFixture<Comp837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp837Component ],
providers: [Service837Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
