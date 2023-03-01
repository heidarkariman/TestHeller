import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolUsageComponent } from './tool-usage.component';

describe('ToolUsageComponent', () => {
  let component: ToolUsageComponent;
  let fixture: ComponentFixture<ToolUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
