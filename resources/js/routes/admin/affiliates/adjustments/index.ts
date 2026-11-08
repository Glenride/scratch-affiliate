import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AffiliateAdminController::store
* @see app/Http/Controllers/AffiliateAdminController.php:190
* @route '/admin/affiliates/{affiliate}/adjustments'
*/
export const store = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/affiliates/{affiliate}/adjustments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AffiliateAdminController::store
* @see app/Http/Controllers/AffiliateAdminController.php:190
* @route '/admin/affiliates/{affiliate}/adjustments'
*/
store.url = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { affiliate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { affiliate: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            affiliate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        affiliate: typeof args.affiliate === 'object'
        ? args.affiliate.id
        : args.affiliate,
    }

    return store.definition.url
            .replace('{affiliate}', parsedArgs.affiliate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateAdminController::store
* @see app/Http/Controllers/AffiliateAdminController.php:190
* @route '/admin/affiliates/{affiliate}/adjustments'
*/
store.post = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::store
* @see app/Http/Controllers/AffiliateAdminController.php:190
* @route '/admin/affiliates/{affiliate}/adjustments'
*/
const storeForm = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::store
* @see app/Http/Controllers/AffiliateAdminController.php:190
* @route '/admin/affiliates/{affiliate}/adjustments'
*/
storeForm.post = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const adjustments = {
    store: Object.assign(store, store),
}

export default adjustments