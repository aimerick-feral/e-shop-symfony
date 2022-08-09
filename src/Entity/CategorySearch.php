<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;

/**
 * This Entity is not related to the database. 
 */
class CategorySearch
{
    // Proprietes availables in the object.
    #[Assert\NotBlank(message: 'Merci de saisir un nom de catégorie.')]
    // #[Assert\Regex(
    //     pattern: '/^[a-zA-Z\s]*$/',
    //     message: 'Merci de saisir un nom de catégorie valide.',
    // )]
    public $name;

    public function __toString()
    {
        return $this->name;
    }
}
