import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lugar7Page } from './lugar7.page';

describe('Lugar7Page', () => {
  let component: Lugar7Page;
  let fixture: ComponentFixture<Lugar7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lugar7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
