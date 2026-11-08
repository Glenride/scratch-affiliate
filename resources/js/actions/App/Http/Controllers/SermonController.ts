import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SermonController::shared
* @see app/Http/Controllers/SermonController.php:90
* @route '/shared/{token}'
*/
export const shared = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shared.url(args, options),
    method: 'get',
})

shared.definition = {
    methods: ["get","head"],
    url: '/shared/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SermonController::shared
* @see app/Http/Controllers/SermonController.php:90
* @route '/shared/{token}'
*/
shared.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return shared.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::shared
* @see app/Http/Controllers/SermonController.php:90
* @route '/shared/{token}'
*/
shared.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shared.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SermonController::shared
* @see app/Http/Controllers/SermonController.php:90
* @route '/shared/{token}'
*/
shared.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shared.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SermonController::shared
* @see app/Http/Controllers/SermonController.php:90
* @route '/shared/{token}'
*/
const sharedForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shared.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SermonController::shared
* @see app/Http/Controllers/SermonController.php:90
* @route '/shared/{token}'
*/
sharedForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shared.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SermonController::shared
* @see app/Http/Controllers/SermonController.php:90
* @route '/shared/{token}'
*/
sharedForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shared.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

shared.form = sharedForm

/**
* @see \App\Http\Controllers\SermonController::show
* @see app/Http/Controllers/SermonController.php:19
* @route '/sermons/{sermon}'
*/
export const show = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/sermons/{sermon}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SermonController::show
* @see app/Http/Controllers/SermonController.php:19
* @route '/sermons/{sermon}'
*/
show.url = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sermon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { sermon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            sermon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sermon: typeof args.sermon === 'object'
        ? args.sermon.id
        : args.sermon,
    }

    return show.definition.url
            .replace('{sermon}', parsedArgs.sermon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::show
* @see app/Http/Controllers/SermonController.php:19
* @route '/sermons/{sermon}'
*/
show.get = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SermonController::show
* @see app/Http/Controllers/SermonController.php:19
* @route '/sermons/{sermon}'
*/
show.head = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SermonController::show
* @see app/Http/Controllers/SermonController.php:19
* @route '/sermons/{sermon}'
*/
const showForm = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SermonController::show
* @see app/Http/Controllers/SermonController.php:19
* @route '/sermons/{sermon}'
*/
showForm.get = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SermonController::show
* @see app/Http/Controllers/SermonController.php:19
* @route '/sermons/{sermon}'
*/
showForm.head = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SermonController::generate
* @see app/Http/Controllers/SermonController.php:40
* @route '/sermons/generate'
*/
export const generate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(options),
    method: 'post',
})

generate.definition = {
    methods: ["post"],
    url: '/sermons/generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SermonController::generate
* @see app/Http/Controllers/SermonController.php:40
* @route '/sermons/generate'
*/
generate.url = (options?: RouteQueryOptions) => {
    return generate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::generate
* @see app/Http/Controllers/SermonController.php:40
* @route '/sermons/generate'
*/
generate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::generate
* @see app/Http/Controllers/SermonController.php:40
* @route '/sermons/generate'
*/
const generateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::generate
* @see app/Http/Controllers/SermonController.php:40
* @route '/sermons/generate'
*/
generateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate.url(options),
    method: 'post',
})

generate.form = generateForm

/**
* @see \App\Http\Controllers\SermonController::createFromLessons
* @see app/Http/Controllers/SermonController.php:165
* @route '/sermons/from-lessons'
*/
export const createFromLessons = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createFromLessons.url(options),
    method: 'post',
})

createFromLessons.definition = {
    methods: ["post"],
    url: '/sermons/from-lessons',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SermonController::createFromLessons
* @see app/Http/Controllers/SermonController.php:165
* @route '/sermons/from-lessons'
*/
createFromLessons.url = (options?: RouteQueryOptions) => {
    return createFromLessons.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::createFromLessons
* @see app/Http/Controllers/SermonController.php:165
* @route '/sermons/from-lessons'
*/
createFromLessons.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createFromLessons.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::createFromLessons
* @see app/Http/Controllers/SermonController.php:165
* @route '/sermons/from-lessons'
*/
const createFromLessonsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createFromLessons.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::createFromLessons
* @see app/Http/Controllers/SermonController.php:165
* @route '/sermons/from-lessons'
*/
createFromLessonsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createFromLessons.url(options),
    method: 'post',
})

createFromLessons.form = createFromLessonsForm

/**
* @see \App\Http\Controllers\SermonController::update
* @see app/Http/Controllers/SermonController.php:66
* @route '/sermons/{sermon}'
*/
export const update = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/sermons/{sermon}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SermonController::update
* @see app/Http/Controllers/SermonController.php:66
* @route '/sermons/{sermon}'
*/
update.url = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sermon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { sermon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            sermon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sermon: typeof args.sermon === 'object'
        ? args.sermon.id
        : args.sermon,
    }

    return update.definition.url
            .replace('{sermon}', parsedArgs.sermon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::update
* @see app/Http/Controllers/SermonController.php:66
* @route '/sermons/{sermon}'
*/
update.put = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\SermonController::update
* @see app/Http/Controllers/SermonController.php:66
* @route '/sermons/{sermon}'
*/
const updateForm = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::update
* @see app/Http/Controllers/SermonController.php:66
* @route '/sermons/{sermon}'
*/
updateForm.put = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\SermonController::destroy
* @see app/Http/Controllers/SermonController.php:81
* @route '/sermons/{sermon}'
*/
export const destroy = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/sermons/{sermon}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SermonController::destroy
* @see app/Http/Controllers/SermonController.php:81
* @route '/sermons/{sermon}'
*/
destroy.url = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sermon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { sermon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            sermon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sermon: typeof args.sermon === 'object'
        ? args.sermon.id
        : args.sermon,
    }

    return destroy.definition.url
            .replace('{sermon}', parsedArgs.sermon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::destroy
* @see app/Http/Controllers/SermonController.php:81
* @route '/sermons/{sermon}'
*/
destroy.delete = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\SermonController::destroy
* @see app/Http/Controllers/SermonController.php:81
* @route '/sermons/{sermon}'
*/
const destroyForm = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::destroy
* @see app/Http/Controllers/SermonController.php:81
* @route '/sermons/{sermon}'
*/
destroyForm.delete = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\SermonController::share
* @see app/Http/Controllers/SermonController.php:116
* @route '/sermons/{sermon}/share'
*/
export const share = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: share.url(args, options),
    method: 'post',
})

share.definition = {
    methods: ["post"],
    url: '/sermons/{sermon}/share',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SermonController::share
* @see app/Http/Controllers/SermonController.php:116
* @route '/sermons/{sermon}/share'
*/
share.url = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sermon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { sermon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            sermon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sermon: typeof args.sermon === 'object'
        ? args.sermon.id
        : args.sermon,
    }

    return share.definition.url
            .replace('{sermon}', parsedArgs.sermon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::share
* @see app/Http/Controllers/SermonController.php:116
* @route '/sermons/{sermon}/share'
*/
share.post = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: share.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::share
* @see app/Http/Controllers/SermonController.php:116
* @route '/sermons/{sermon}/share'
*/
const shareForm = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: share.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::share
* @see app/Http/Controllers/SermonController.php:116
* @route '/sermons/{sermon}/share'
*/
shareForm.post = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: share.url(args, options),
    method: 'post',
})

share.form = shareForm

/**
* @see \App\Http\Controllers\SermonController::togglePublic
* @see app/Http/Controllers/SermonController.php:141
* @route '/sermons/{sermon}/toggle-public'
*/
export const togglePublic = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: togglePublic.url(args, options),
    method: 'post',
})

togglePublic.definition = {
    methods: ["post"],
    url: '/sermons/{sermon}/toggle-public',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SermonController::togglePublic
* @see app/Http/Controllers/SermonController.php:141
* @route '/sermons/{sermon}/toggle-public'
*/
togglePublic.url = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sermon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { sermon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            sermon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sermon: typeof args.sermon === 'object'
        ? args.sermon.id
        : args.sermon,
    }

    return togglePublic.definition.url
            .replace('{sermon}', parsedArgs.sermon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::togglePublic
* @see app/Http/Controllers/SermonController.php:141
* @route '/sermons/{sermon}/toggle-public'
*/
togglePublic.post = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: togglePublic.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::togglePublic
* @see app/Http/Controllers/SermonController.php:141
* @route '/sermons/{sermon}/toggle-public'
*/
const togglePublicForm = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: togglePublic.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::togglePublic
* @see app/Http/Controllers/SermonController.php:141
* @route '/sermons/{sermon}/toggle-public'
*/
togglePublicForm.post = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: togglePublic.url(args, options),
    method: 'post',
})

togglePublic.form = togglePublicForm

/**
* @see \App\Http\Controllers\SermonController::addLesson
* @see app/Http/Controllers/SermonController.php:213
* @route '/sermons/{sermon}/add-lesson'
*/
export const addLesson = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addLesson.url(args, options),
    method: 'post',
})

addLesson.definition = {
    methods: ["post"],
    url: '/sermons/{sermon}/add-lesson',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SermonController::addLesson
* @see app/Http/Controllers/SermonController.php:213
* @route '/sermons/{sermon}/add-lesson'
*/
addLesson.url = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sermon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { sermon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            sermon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sermon: typeof args.sermon === 'object'
        ? args.sermon.id
        : args.sermon,
    }

    return addLesson.definition.url
            .replace('{sermon}', parsedArgs.sermon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::addLesson
* @see app/Http/Controllers/SermonController.php:213
* @route '/sermons/{sermon}/add-lesson'
*/
addLesson.post = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addLesson.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::addLesson
* @see app/Http/Controllers/SermonController.php:213
* @route '/sermons/{sermon}/add-lesson'
*/
const addLessonForm = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addLesson.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::addLesson
* @see app/Http/Controllers/SermonController.php:213
* @route '/sermons/{sermon}/add-lesson'
*/
addLessonForm.post = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addLesson.url(args, options),
    method: 'post',
})

addLesson.form = addLessonForm

/**
* @see \App\Http\Controllers\SermonController::removeLesson
* @see app/Http/Controllers/SermonController.php:240
* @route '/sermons/{sermon}/remove-lesson'
*/
export const removeLesson = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removeLesson.url(args, options),
    method: 'post',
})

removeLesson.definition = {
    methods: ["post"],
    url: '/sermons/{sermon}/remove-lesson',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SermonController::removeLesson
* @see app/Http/Controllers/SermonController.php:240
* @route '/sermons/{sermon}/remove-lesson'
*/
removeLesson.url = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sermon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { sermon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            sermon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sermon: typeof args.sermon === 'object'
        ? args.sermon.id
        : args.sermon,
    }

    return removeLesson.definition.url
            .replace('{sermon}', parsedArgs.sermon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::removeLesson
* @see app/Http/Controllers/SermonController.php:240
* @route '/sermons/{sermon}/remove-lesson'
*/
removeLesson.post = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removeLesson.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::removeLesson
* @see app/Http/Controllers/SermonController.php:240
* @route '/sermons/{sermon}/remove-lesson'
*/
const removeLessonForm = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: removeLesson.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SermonController::removeLesson
* @see app/Http/Controllers/SermonController.php:240
* @route '/sermons/{sermon}/remove-lesson'
*/
removeLessonForm.post = (args: { sermon: string | number | { id: string | number } } | [sermon: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: removeLesson.url(args, options),
    method: 'post',
})

removeLesson.form = removeLessonForm

/**
* @see \App\Http\Controllers\SermonController::sharedWithMe
* @see app/Http/Controllers/SermonController.php:151
* @route '/shared-with-me'
*/
export const sharedWithMe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sharedWithMe.url(options),
    method: 'get',
})

sharedWithMe.definition = {
    methods: ["get","head"],
    url: '/shared-with-me',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SermonController::sharedWithMe
* @see app/Http/Controllers/SermonController.php:151
* @route '/shared-with-me'
*/
sharedWithMe.url = (options?: RouteQueryOptions) => {
    return sharedWithMe.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SermonController::sharedWithMe
* @see app/Http/Controllers/SermonController.php:151
* @route '/shared-with-me'
*/
sharedWithMe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sharedWithMe.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SermonController::sharedWithMe
* @see app/Http/Controllers/SermonController.php:151
* @route '/shared-with-me'
*/
sharedWithMe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sharedWithMe.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SermonController::sharedWithMe
* @see app/Http/Controllers/SermonController.php:151
* @route '/shared-with-me'
*/
const sharedWithMeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sharedWithMe.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SermonController::sharedWithMe
* @see app/Http/Controllers/SermonController.php:151
* @route '/shared-with-me'
*/
sharedWithMeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sharedWithMe.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SermonController::sharedWithMe
* @see app/Http/Controllers/SermonController.php:151
* @route '/shared-with-me'
*/
sharedWithMeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sharedWithMe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sharedWithMe.form = sharedWithMeForm

const SermonController = { shared, show, generate, createFromLessons, update, destroy, share, togglePublic, addLesson, removeLesson, sharedWithMe }

export default SermonController