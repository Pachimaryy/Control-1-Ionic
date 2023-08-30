import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lugar4Page } from './lugar4.page';

describe('Lugar4Page', () => {
  let component: Lugar4Page;
  let fixture: ComponentFixture<Lugar4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lugar4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
