<?php

namespace App\Enums;

enum UserRoleEnum: string
{
    case ELEVE = "eleve";
    case CREATEUR = "createur";
    case ADMIN = "admin";
}
