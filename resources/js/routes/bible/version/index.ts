import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
export const chapter = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chapter.url(args, options),
    method: 'get',
})

chapter.definition = {
    methods: ["get","head"],
    url: '/bible/{version}/{book}/{chapter?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
chapter.url = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions) => {
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

    return chapter.definition.url
            .replace('{version}', parsedArgs.version.toString())
            .replace('{book}', parsedArgs.book.toString())
            .replace('{chapter?}', parsedArgs.chapter?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
chapter.get = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chapter.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
chapter.head = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chapter.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
const chapterForm = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chapter.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
chapterForm.get = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chapter.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:59
* @route '/bible/{version}/{book}/{chapter?}'
*/
chapterForm.head = (args: { version: string | number, book: string | number, chapter?: string | number } | [version: string | number, book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chapter.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

chapter.form = chapterForm

const version = {
    chapter: Object.assign(chapter, chapter),
}

export default version