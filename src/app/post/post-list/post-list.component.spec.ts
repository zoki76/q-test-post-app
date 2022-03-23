import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterService } from '@shared/services';
import { FilterComponent } from 'src/app/shared/components/filter/filter.component';
import { GridComponent } from 'src/app/shared/components/grid/grid.component';
import { GridFilterPipe } from 'src/app/shared/pipes/grid-filter.pipe';
import { PostListComponent } from './post-list.component';

const resolverDataMock = [
  {
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    id: 1,
    name: 'Leanne Graham',
    numberOfComments: 5,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    userId: 1,
  },
  {
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    id: 2,
    name: 'Leanne Graham',
    numberOfComments: 5,
    title: 'qui est esse',
    userId: 1,
  },
];

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
      ],
      declarations: [
        PostListComponent,
        GridComponent,
        FilterComponent,
        GridFilterPipe,
      ],
      providers: [
        FilterService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: { postListItems: resolverDataMock } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.postListItems).toEqual(resolverDataMock);
  });
});
