import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lugar5Page } from './lugar5.page';

describe('Lugar5Page', () => {
  let component: Lugar5Page;
  let fixture: ComponentFixture<Lugar5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lugar5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
