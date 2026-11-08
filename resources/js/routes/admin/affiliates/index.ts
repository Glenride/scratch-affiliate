import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import payouts from './payouts'
import adjustments from './adjustments'
/**
* @see \App\Http\Controllers\AffiliateAdminController::index
* @see app/Http/Controllers/AffiliateAdminController.php:33
* @route '/admin/affiliates'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/affiliates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AffiliateAdminController::index
* @see app/Http/Controllers/AffiliateAdminController.php:33
* @route '/admin/affiliates'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateAdminController::index
* @see app/Http/Controllers/AffiliateAdminController.php:33
* @route '/admin/affiliates'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::index
* @see app/Http/Controllers/AffiliateAdminController.php:33
* @route '/admin/affiliates'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::index
* @see app/Http/Controllers/AffiliateAdminController.php:33
* @route '/admin/affiliates'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::index
* @see app/Http/Controllers/AffiliateAdminController.php:33
* @route '/admin/affiliates'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::index
* @see app/Http/Controllers/AffiliateAdminController.php:33
* @route '/admin/affiliates'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\AffiliateAdminController::invite
* @see app/Http/Controllers/AffiliateAdminController.php:62
* @route '/admin/affiliates/invite'
*/
export const invite = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: invite.url(options),
    method: 'post',
})

invite.definition = {
    methods: ["post"],
    url: '/admin/affiliates/invite',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AffiliateAdminController::invite
* @see app/Http/Controllers/AffiliateAdminController.php:62
* @route '/admin/affiliates/invite'
*/
invite.url = (options?: RouteQueryOptions) => {
    return invite.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateAdminController::invite
* @see app/Http/Controllers/AffiliateAdminController.php:62
* @route '/admin/affiliates/invite'
*/
invite.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: invite.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::invite
* @see app/Http/Controllers/AffiliateAdminController.php:62
* @route '/admin/affiliates/invite'
*/
const inviteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: invite.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::invite
* @see app/Http/Controllers/AffiliateAdminController.php:62
* @route '/admin/affiliates/invite'
*/
inviteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: invite.url(options),
    method: 'post',
})

invite.form = inviteForm

/**
* @see \App\Http\Controllers\AffiliateAdminController::show
* @see app/Http/Controllers/AffiliateAdminController.php:88
* @route '/admin/affiliates/{affiliate}'
*/
export const show = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/affiliates/{affiliate}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AffiliateAdminController::show
* @see app/Http/Controllers/AffiliateAdminController.php:88
* @route '/admin/affiliates/{affiliate}'
*/
show.url = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{affiliate}', parsedArgs.affiliate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateAdminController::show
* @see app/Http/Controllers/AffiliateAdminController.php:88
* @route '/admin/affiliates/{affiliate}'
*/
show.get = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::show
* @see app/Http/Controllers/AffiliateAdminController.php:88
* @route '/admin/affiliates/{affiliate}'
*/
show.head = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::show
* @see app/Http/Controllers/AffiliateAdminController.php:88
* @route '/admin/affiliates/{affiliate}'
*/
const showForm = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::show
* @see app/Http/Controllers/AffiliateAdminController.php:88
* @route '/admin/affiliates/{affiliate}'
*/
showForm.get = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::show
* @see app/Http/Controllers/AffiliateAdminController.php:88
* @route '/admin/affiliates/{affiliate}'
*/
showForm.head = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\AffiliateAdminController::update
* @see app/Http/Controllers/AffiliateAdminController.php:153
* @route '/admin/affiliates/{affiliate}'
*/
export const update = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/admin/affiliates/{affiliate}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\AffiliateAdminController::update
* @see app/Http/Controllers/AffiliateAdminController.php:153
* @route '/admin/affiliates/{affiliate}'
*/
update.url = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{affiliate}', parsedArgs.affiliate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateAdminController::update
* @see app/Http/Controllers/AffiliateAdminController.php:153
* @route '/admin/affiliates/{affiliate}'
*/
update.patch = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::update
* @see app/Http/Controllers/AffiliateAdminController.php:153
* @route '/admin/affiliates/{affiliate}'
*/
const updateForm = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::update
* @see app/Http/Controllers/AffiliateAdminController.php:153
* @route '/admin/affiliates/{affiliate}'
*/
updateForm.patch = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\AffiliateAdminController::status
* @see app/Http/Controllers/AffiliateAdminController.php:142
* @route '/admin/affiliates/{affiliate}/status'
*/
export const status = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: status.url(args, options),
    method: 'patch',
})

status.definition = {
    methods: ["patch"],
    url: '/admin/affiliates/{affiliate}/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\AffiliateAdminController::status
* @see app/Http/Controllers/AffiliateAdminController.php:142
* @route '/admin/affiliates/{affiliate}/status'
*/
status.url = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return status.definition.url
            .replace('{affiliate}', parsedArgs.affiliate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateAdminController::status
* @see app/Http/Controllers/AffiliateAdminController.php:142
* @route '/admin/affiliates/{affiliate}/status'
*/
status.patch = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: status.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::status
* @see app/Http/Controllers/AffiliateAdminController.php:142
* @route '/admin/affiliates/{affiliate}/status'
*/
const statusForm = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: status.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::status
* @see app/Http/Controllers/AffiliateAdminController.php:142
* @route '/admin/affiliates/{affiliate}/status'
*/
statusForm.patch = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: status.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

status.form = statusForm

const affiliates = {
    index: Object.assign(index, index),
    invite: Object.assign(invite, invite),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    status: Object.assign(status, status),
    payouts: Object.assign(payouts, payouts),
    adjustments: Object.assign(adjustments, adjustments),
}

export default affiliates