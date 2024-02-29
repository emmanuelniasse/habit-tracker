**A quoi sert l'injection de dépendance ?**

1. _Séparation des préoccupations (Separation of Concerns - SoC) _

   - Le code se concentre sur ce qu'il doit faire (sa responsabilité principale) plutôt que sur la façon dont il obtient ses dépendances.
     Au lieu de s'occuper d'instancier une nouvelle dépence pour l'utiliser, la dépendance est injectée et il est possible d'en bénéficier directement.

2. Flexibilité et réutilisabilité :

   - L'injection de dépendance rend le code plus flexible en permettant d'alterner facilement entre différentes implémentations de dépendances sans changer le code du composant qui les utilise.
     Le changement de dépendance pourra être effectué directement au niveau des providers du module, exemple :

   ```typescript
       @Module({
           controllers: [UserController],
           providers: [
               { provide: 'UserService', useClass: DatabaseUserService } // Changer ici pour MockUserService si nécessaire
           ]
       })
   ```

   - La dépendance initiale de ce module est `UserService`.
     A ce niveau, nous remplaçons la dépendance `UserService` par `DatabaseUserService` grâce à `useClass`.

   3. Facilité de testabilité :

   - En injectant les dépendances, il est facilement possible de substituer des implémentations réelles par des mocks ou des doubles pour les tests unitaires.
   - Cela vous permet de tester la logique de votre composant de manière isolée sans avoir besoin de véritables dépendances.
     Voici comment cela pourrait être fait avec des tests unitaires utilisant Jest :

   ```typescript
   // user.service.ts
   @Injectable()
   export class UserService {
     constructor(private readonly databaseClient: DatabaseClient) {}

     getUsers() {
       return this.databaseClient.query('SELECT * FROM users');
     }
   }

   // user.service.spec.ts
   import { UserService } from './user.service';

   describe('UserService', () => {
     let userService: UserService;
     let mockDatabaseClient;

     beforeEach(() => {
       mockDatabaseClient = {
         query: jest.fn().mockReturnValue(Promise.resolve([])),
       };
       userService = new UserService(mockDatabaseClient);
     });

     it('should return empty array when no users found', async () => {
       const users = await userService.getUsers();
       expect(users).toEqual([]);
       expect(mockDatabaseClient.query).toHaveBeenCalledWith(
         'SELECT * FROM users',
       );
     });
   });
   ```
