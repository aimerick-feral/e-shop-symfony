<?php

namespace App\Repository;

use App\Entity\DeliveryMode;
use App\Entity\DeliveryModeSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DeliveryMode|null find($id, $lockMode = null, $lockVersion = null)
 * @method DeliveryMode|null findOneBy(array $criteria, array $orderBy = null)
 * @method DeliveryMode[]    findAll()
 * @method DeliveryMode[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DeliveryModeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DeliveryMode::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(DeliveryMode $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(DeliveryMode $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return DeliveryMode[] Returns an array of DeliveryMode objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DeliveryMode
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    /**
     * Method to find a Delivery Mode by his name.
     * @param DeliveryModeSearch $deliveryModeSearch
     * @return array
     */
    public function findDeliveryModeByName(DeliveryModeSearch $deliveryModeSearch): array
    {
        // We instanciate the QueryBuilder and we refers to the DeliveryMode.
        $queryBuilder = $this->createQueryBuilder('deliveryMode');
        // We say that the :name is egual to the name property of the DeliveryMode Entity. 
        $queryBuilder->where('deliveryMode.name LIKE :name');
        // We secure the query by setting a parameter to avoid the SQL injections. 
        $queryBuilder->setParameter(':name', "%$deliveryModeSearch%");
        // We return the result of the query. 
        return $queryBuilder->getQuery()->getResult();
    }
}
