<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\UserSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\DBAL\Query;
use Doctrine\ORM\Query as ORMQuery;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newHashedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    // /**
    //  * @return User[] Returns an array of User objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    /**
     * Method to find a user by his role.
     * @param string $roles
     * @return array
     */
    public function findUsersByRoles(string $roles): array
    {
        // We instanciate the QueryBuilder and we refers to the User Entity.
        $queryBuilder = $this->createQueryBuilder('user');
        // We say that the :roles is egual to the roles property of the User Entity. 
        $queryBuilder->where('user.roles LIKE :roles');
        // We secure the query by setting a parameter to avoid the SQL injections. 
        $queryBuilder->setParameter(':roles', "%$roles%");
        // We return the result of the query. 
        return $queryBuilder->getQuery()->getResult();
    }

    /**
     * Method to find a User by his last name.
     * @param UserSearch $userSearch
     * @return array
     */
    public function findUserByLastName(UserSearch $userSearch): array
    {
        // We instanciate the QueryBuilder and we refers to the User Entity.
        $queryBuilder = $this->createQueryBuilder('user');
        // We say that the :email is egual to the last name property of the User Entity. 
        $queryBuilder->where('user.lastName LIKE :lastName');
        // We secure the query by setting a parameter to avoid the SQL injections. 
        $queryBuilder->setParameter(':lastName', "%$userSearch%");
        // We return the result of the query. 
        return $queryBuilder->getQuery()->getResult();
    }

    // /**
    //  * Method to find a User by his email.
    //  * @param UserSearch $userSearch
    //  * @return array
    //  */
    // public function findUserByEmail(UserSearch $userSearch): array
    // {
    //     // We instanciate the QueryBuilder and we refers to the User Entity.
    //     $queryBuilder = $this->createQueryBuilder('user');
    //     // We say that the :email is egual to the email property of the User Entity. 
    //     $queryBuilder->where('user.email LIKE :email');
    //     // We secure the query by setting a parameter to avoid the SQL injections. 
    //     $queryBuilder->setParameter(':email', "%$userSearch%");
    //     // We return the result of the query. 
    //     return $queryBuilder->getQuery()->getResult();
    // }
}
