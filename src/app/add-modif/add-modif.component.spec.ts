import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModifComponent } from './add-modif.component';

describe('AddModifComponent', () => {
  let component: AddModifComponent;
  let fixture: ComponentFixture<AddModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddModifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
