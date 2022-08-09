<?php

namespace App\Repository;

use App\Entity\Purchase;
use App\Entity\PurchaseSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Purchase|null find($id, $lockMode = null, $lockVersion = null)
 * @method Purchase|null findOneBy(array $criteria, array $orderBy = null)
 * @method Purchase[]    findAll()
 * @method Purchase[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PurchaseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Purchase::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(Purchase $entity, bool $flush = true): void
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
    public function remove(Purchase $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return Purchase[] Returns an array of Purchase objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Purchase
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    /**
     * Method to find a Purchase by his reference.
     * @param PurchaseSearch $purchaseSearch
     * @return array
     */
    public function findPurchaseByReference(PurchaseSearch $purchaseSearch): array
    {
        // We instanciate the QueryBuilder and we refers to the Purchase.
        $queryBuilder = $this->createQueryBuilder('purchase');
        // We say that the :reference is egual to the reference property of the Purchase Entity. 
        $queryBuilder->where('purchase.reference LIKE :reference');
        // We secure the query by setting a parameter to avoid the SQL injections. 
        $queryBuilder->setParameter(':reference', "%$purchaseSearch%");
        // We return the result of the query. 
        return $queryBuilder->getQuery()->getResult();
    }
}
