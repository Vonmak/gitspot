import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitspotComponent } from './gitspot.component';

describe('GitspotComponent', () => {
  let component: GitspotComponent;
  let fixture: ComponentFixture<GitspotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitspotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
