import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lugar1Page } from './lugar1.page';

describe('Lugar1Page', () => {
  let component: Lugar1Page;
  let fixture: ComponentFixture<Lugar1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lugar1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
