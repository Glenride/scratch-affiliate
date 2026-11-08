import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\AffiliateAdminController::updateStatus
* @see app/Http/Controllers/AffiliateAdminController.php:142
* @route '/admin/affiliates/{affiliate}/status'
*/
export const updateStatus = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

updateStatus.definition = {
    methods: ["patch"],
    url: '/admin/affiliates/{affiliate}/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\AffiliateAdminController::updateStatus
* @see app/Http/Controllers/AffiliateAdminController.php:142
* @route '/admin/affiliates/{affiliate}/status'
*/
updateStatus.url = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateStatus.definition.url
            .replace('{affiliate}', parsedArgs.affiliate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateAdminController::updateStatus
* @see app/Http/Controllers/AffiliateAdminController.php:142
* @route '/admin/affiliates/{affiliate}/status'
*/
updateStatus.patch = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::updateStatus
* @see app/Http/Controllers/AffiliateAdminController.php:142
* @route '/admin/affiliates/{affiliate}/status'
*/
const updateStatusForm = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::updateStatus
* @see app/Http/Controllers/AffiliateAdminController.php:142
* @route '/admin/affiliates/{affiliate}/status'
*/
updateStatusForm.patch = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateStatus.form = updateStatusForm

/**
* @see \App\Http\Controllers\AffiliateAdminController::storePayout
* @see app/Http/Controllers/AffiliateAdminController.php:166
* @route '/admin/affiliates/{affiliate}/payouts'
*/
export const storePayout = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storePayout.url(args, options),
    method: 'post',
})

storePayout.definition = {
    methods: ["post"],
    url: '/admin/affiliates/{affiliate}/payouts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AffiliateAdminController::storePayout
* @see app/Http/Controllers/AffiliateAdminController.php:166
* @route '/admin/affiliates/{affiliate}/payouts'
*/
storePayout.url = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return storePayout.definition.url
            .replace('{affiliate}', parsedArgs.affiliate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateAdminController::storePayout
* @see app/Http/Controllers/AffiliateAdminController.php:166
* @route '/admin/affiliates/{affiliate}/payouts'
*/
storePayout.post = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storePayout.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::storePayout
* @see app/Http/Controllers/AffiliateAdminController.php:166
* @route '/admin/affiliates/{affiliate}/payouts'
*/
const storePayoutForm = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storePayout.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::storePayout
* @see app/Http/Controllers/AffiliateAdminController.php:166
* @route '/admin/affiliates/{affiliate}/payouts'
*/
storePayoutForm.post = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storePayout.url(args, options),
    method: 'post',
})

storePayout.form = storePayoutForm

/**
* @see \App\Http\Controllers\AffiliateAdminController::storeAdjustment
* @see app/Http/Controllers/AffiliateAdminController.php:190
* @route '/admin/affiliates/{affiliate}/adjustments'
*/
export const storeAdjustment = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeAdjustment.url(args, options),
    method: 'post',
})

storeAdjustment.definition = {
    methods: ["post"],
    url: '/admin/affiliates/{affiliate}/adjustments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AffiliateAdminController::storeAdjustment
* @see app/Http/Controllers/AffiliateAdminController.php:190
* @route '/admin/affiliates/{affiliate}/adjustments'
*/
storeAdjustment.url = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return storeAdjustment.definition.url
            .replace('{affiliate}', parsedArgs.affiliate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AffiliateAdminController::storeAdjustment
* @see app/Http/Controllers/AffiliateAdminController.php:190
* @route '/admin/affiliates/{affiliate}/adjustments'
*/
storeAdjustment.post = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeAdjustment.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::storeAdjustment
* @see app/Http/Controllers/AffiliateAdminController.php:190
* @route '/admin/affiliates/{affiliate}/adjustments'
*/
const storeAdjustmentForm = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeAdjustment.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AffiliateAdminController::storeAdjustment
* @see app/Http/Controllers/AffiliateAdminController.php:190
* @route '/admin/affiliates/{affiliate}/adjustments'
*/
storeAdjustmentForm.post = (args: { affiliate: string | number | { id: string | number } } | [affiliate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeAdjustment.url(args, options),
    method: 'post',
})

storeAdjustment.form = storeAdjustmentForm

const AffiliateAdminController = { index, invite, show, update, updateStatus, storePayout, storeAdjustment }

export default AffiliateAdminController