import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp847Component } from './comp-847.component';

describe('Comp847Component', () => {
  let component: Comp847Component;
  let fixture: ComponentFixture<Comp847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
