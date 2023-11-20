import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewLettersPage } from './new-letters.page';

describe('NewLettersPage', () => {
  let component: NewLettersPage;
  let fixture: ComponentFixture<NewLettersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewLettersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
