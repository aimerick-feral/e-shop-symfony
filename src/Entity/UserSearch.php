<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;

/**
 * This Entity is not related to the database. 
 */
class UserSearch
{
    // Proprietes availables in the object.
    #[Assert\NotBlank(message: "Merci de saisir un e-mail.")]
    // #[Assert\Regex(
    //     pattern: '/^(.+)@(\S+)$/',
    //     message: 'Merci de saisir un e-mail valide.',
    // )]
    public $email;

    // // Proprietes availables in the object.
    // #[Assert\NotBlank(message: "Merci de saisir un e-mail.")]
    // public $string;

    public function __toString()
    {
        return $this->email;
    }
}
