import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ReferralController::redirect
* @see app/Http/Controllers/ReferralController.php:23
* @route '/r/{code}'
*/
export const redirect = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

redirect.definition = {
    methods: ["get","head"],
    url: '/r/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReferralController::redirect
* @see app/Http/Controllers/ReferralController.php:23
* @route '/r/{code}'
*/
redirect.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return redirect.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReferralController::redirect
* @see app/Http/Controllers/ReferralController.php:23
* @route '/r/{code}'
*/
redirect.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReferralController::redirect
* @see app/Http/Controllers/ReferralController.php:23
* @route '/r/{code}'
*/
redirect.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirect.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ReferralController::redirect
* @see app/Http/Controllers/ReferralController.php:23
* @route '/r/{code}'
*/
const redirectForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReferralController::redirect
* @see app/Http/Controllers/ReferralController.php:23
* @route '/r/{code}'
*/
redirectForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReferralController::redirect
* @see app/Http/Controllers/ReferralController.php:23
* @route '/r/{code}'
*/
redirectForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

redirect.form = redirectForm

const ReferralController = { redirect }

export default ReferralController