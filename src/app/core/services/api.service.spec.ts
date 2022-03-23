import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ENV_CONFIG } from '../http/interfaces/environment-config.interface';
import { ApiService } from './api.service';
const mockPostsList = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
];
const mockNewPost = {
  userId: 10,
  title: 'This is only new post',
  body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
};

describe('ApiService', () => {
  let service: ApiService;
  let http: HttpTestingController;
  const baseUrl = 'http://test.com';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        {
          provide: ENV_CONFIG,
          useValue: { environment: { baseUrl: baseUrl } },
        },
      ],
    });
    service = TestBed.inject(ApiService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from api', () => {
    service
      .get('posts', { test1: 'test1', test2: 'test2' })
      .subscribe((data) => {
        expect(data).toEqual(mockPostsList);
      });
    const request = http.expectOne(`${baseUrl}/posts?test1=test1&test2=test2`);
    expect(request.request.method).toBe('GET');
    request.flush(mockPostsList);
  });

  it('should save new post', () => {
    const responseData = {
      message: 'The post is successfully saved!',
    };
    service.post('new-post', mockNewPost).subscribe((data) => {
      expect(data).toEqual(responseData);
    });
    const request = http.expectOne(`${baseUrl}/new-post`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(mockNewPost);
    request.flush(responseData);
  });
});
