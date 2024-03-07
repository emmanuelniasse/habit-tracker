/**
 * TODOO :
 * Si je fourni `jwtConstants.secret` à `auth.module.ts`, ma variable n'est pas interprétée.
 * Cela peut être dû à un problème de chargement des variables d'environnement.
 * 
 * Voir ci-dessous :
 * 
 * `auth.module.ts`
 * JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_PASSPHRASE,
      signOptions: { expiresIn: '60s' },
    }),
 *  */

export const jwtConstants = {
  // secret: 'valeur en dur',
  secret: process.env.JWT_SECRET_PASSPHRASE,
};
