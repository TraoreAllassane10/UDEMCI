<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EleveMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
         $user = $request->user();
        
        if ($user && $user->role !== "eleve") {
            abort(403, "Désolé vous n'êtes pas authorisé à accéder à cette page");
        }

        return $next($request);
    }
}
