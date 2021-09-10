import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';

import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';
import { userStub } from '../stubs/user.stub';
import { CreateUserRequest } from '../../dto/request/create-user-request.dto';

describe('UsersController', () => {
  let dbConnection: Connection;
  let httpServer: any;
  let app: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
    dbConnection = moduleRef.get<DatabaseService>(DatabaseService).getDbHandle();
  });

  afterAll(async () => {
    await dbConnection.collection('users').deleteMany({});
    await app.close();
  });

  beforeEach(async () => {
    await dbConnection.collection('users').deleteMany({});
  })

  describe('getUsers', async () => {
    it ('should return array of users', async () => {
      await dbConnection.collection('users').insertOne(userStub());
      const response = request(httpServer).get('/users');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([userStub()]);
    })
  });

  describe('createUser', async () => {
    it ('should create a user', async () => {
      const createUserRequest: CreateUserRequest = {
        email: userStub().email,
        age: userStub().age,
      };

      const response = await request(httpServer).post('/users').send(createUserRequest)

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(createUserRequest);

      const user = await dbConnection.collection('users').findOne({ email: createUserRequest.email });
      expect(user).toMatchObject(createUserRequest);
    })
  });
});
