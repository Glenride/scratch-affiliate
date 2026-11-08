import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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

/**
* @see \App\Http\Controllers\AffiliateDashboardController::dashboard
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/affiliate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AffiliateDashboardController::dashboard
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateDashboardController::dashboard
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateDashboardController::dashboard
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AffiliateDashboardController::dashboard
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateDashboardController::dashboard
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateDashboardController::dashboard
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

const affiliate = {
    redirect: Object.assign(redirect, redirect),
    dashboard: Object.assign(dashboard, dashboard),
}

export default affiliate