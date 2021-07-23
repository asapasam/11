import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkeComponent } from './worke.component';

describe('WorkeComponent', () => {
  let component: WorkeComponent;
  let fixture: ComponentFixture<WorkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
