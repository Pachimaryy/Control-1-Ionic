import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lugar8Page } from './lugar8.page';

describe('Lugar8Page', () => {
  let component: Lugar8Page;
  let fixture: ComponentFixture<Lugar8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lugar8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
