import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacilityPage } from './facility.page';

describe('FacilityPage', () => {
  let component: FacilityPage;
  let fixture: ComponentFixture<FacilityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FacilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
