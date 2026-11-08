import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BibleController::index
* @see app/Http/Controllers/BibleController.php:15
* @route '/'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BibleController::index
* @see app/Http/Controllers/BibleController.php:15
* @route '/'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleController::index
* @see app/Http/Controllers/BibleController.php:15
* @route '/'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::index
* @see app/Http/Controllers/BibleController.php:15
* @route '/'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BibleController::index
* @see app/Http/Controllers/BibleController.php:15
* @route '/'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::index
* @see app/Http/Controllers/BibleController.php:15
* @route '/'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::index
* @see app/Http/Controllers/BibleController.php:15
* @route '/'
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
* @see \App\Http\Controllers\BibleController::showVersioned
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
export const showVersioned = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showVersioned.url(args, options),
    method: 'get',
})

showVersioned.definition = {
    methods: ["get","head"],
    url: '/bible/{version}/{book}/{chapter?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BibleController::showVersioned
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
showVersioned.url = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            version: args[0],
            book: args[1],
            chapter: args[2],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "chapter",
    ])

    const parsedArgs = {
        version: args.version,
        book: args.book,
        chapter: args.chapter,
    }

    return showVersioned.definition.url
            .replace('{version}', parsedArgs.version.toString())
            .replace('{book}', parsedArgs.book.toString())
            .replace('{chapter?}', parsedArgs.chapter?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleController::showVersioned
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
showVersioned.get = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showVersioned.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::showVersioned
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
showVersioned.head = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showVersioned.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BibleController::showVersioned
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
const showVersionedForm = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showVersioned.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::showVersioned
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
showVersionedForm.get = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showVersioned.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::showVersioned
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
showVersionedForm.head = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showVersioned.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showVersioned.form = showVersionedForm

/**
* @see \App\Http\Controllers\BibleController::show
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
export const show = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/bible/{book}/{chapter?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BibleController::show
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
show.url = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            book: args[0],
            chapter: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "chapter",
    ])

    const parsedArgs = {
        book: args.book,
        chapter: args.chapter,
    }

    return show.definition.url
            .replace('{book}', parsedArgs.book.toString())
            .replace('{chapter?}', parsedArgs.chapter?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleController::show
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
show.get = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::show
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
show.head = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BibleController::show
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
const showForm = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::show
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
showForm.get = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::show
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
showForm.head = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const BibleController = { index, showVersioned, show }

export default BibleController