import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldBossContainerComponent } from './world-boss-container.component';

describe('WorldBossContainerComponent', () => {
  let component: WorldBossContainerComponent;
  let fixture: ComponentFixture<WorldBossContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldBossContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldBossContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
