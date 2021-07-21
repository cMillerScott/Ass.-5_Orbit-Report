import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrbitCountsComponent } from './orbit-counts.component';

describe('OrbitCountsComponent', () => {
  let component: OrbitCountsComponent;
  let fixture: ComponentFixture<OrbitCountsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
