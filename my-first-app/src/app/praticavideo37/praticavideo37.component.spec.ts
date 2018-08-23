import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praticavideo37Component } from './praticavideo37.component';

describe('Praticavideo37Component', () => {
  let component: Praticavideo37Component;
  let fixture: ComponentFixture<Praticavideo37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praticavideo37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praticavideo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
