import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AffiliateDashboardController::show
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/affiliate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AffiliateDashboardController::show
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateDashboardController::show
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateDashboardController::show
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AffiliateDashboardController::show
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateDashboardController::show
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateDashboardController::show
* @see app/Http/Controllers/AffiliateDashboardController.php:20
* @route '/affiliate'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const AffiliateDashboardController = { show }

export default AffiliateDashboardController