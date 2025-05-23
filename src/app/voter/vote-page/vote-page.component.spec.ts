import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotePageComponent } from './vote-page.component';

describe('VotePageComponent', () => {
  let component: VotePageComponent;
  let fixture: ComponentFixture<VotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
