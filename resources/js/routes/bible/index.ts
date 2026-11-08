import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
import version from './version'
/**
* @see \App\Http\Controllers\BibleSearchController::search
* @see app/Http/Controllers/BibleSearchController.php:19
* @route '/bible/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/bible/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BibleSearchController::search
* @see app/Http/Controllers/BibleSearchController.php:19
* @route '/bible/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleSearchController::search
* @see app/Http/Controllers/BibleSearchController.php:19
* @route '/bible/search'
*/
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleSearchController::search
* @see app/Http/Controllers/BibleSearchController.php:19
* @route '/bible/search'
*/
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BibleSearchController::search
* @see app/Http/Controllers/BibleSearchController.php:19
* @route '/bible/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleSearchController::search
* @see app/Http/Controllers/BibleSearchController.php:19
* @route '/bible/search'
*/
searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleSearchController::search
* @see app/Http/Controllers/BibleSearchController.php:19
* @route '/bible/search'
*/
searchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

search.form = searchForm

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
export const chapter = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chapter.url(args, options),
    method: 'get',
})

chapter.definition = {
    methods: ["get","head"],
    url: '/bible/{book}/{chapter?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
chapter.url = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions) => {
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

    return chapter.definition.url
            .replace('{book}', parsedArgs.book.toString())
            .replace('{chapter?}', parsedArgs.chapter?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
chapter.get = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chapter.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
chapter.head = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chapter.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
const chapterForm = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chapter.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
chapterForm.get = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chapter.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BibleController::chapter
* @see app/Http/Controllers/BibleController.php:50
* @route '/bible/{book}/{chapter?}'
*/
chapterForm.head = (args: { book: string | number, chapter?: string | number } | [book: string | number, chapter: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chapter.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

chapter.form = chapterForm

/**
* @see \App\Http\Controllers\BibleInteractionController::highlight
* @see app/Http/Controllers/BibleInteractionController.php:14
* @route '/bible/highlight'
*/
export const highlight = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: highlight.url(options),
    method: 'post',
})

highlight.definition = {
    methods: ["post"],
    url: '/bible/highlight',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BibleInteractionController::highlight
* @see app/Http/Controllers/BibleInteractionController.php:14
* @route '/bible/highlight'
*/
highlight.url = (options?: RouteQueryOptions) => {
    return highlight.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleInteractionController::highlight
* @see app/Http/Controllers/BibleInteractionController.php:14
* @route '/bible/highlight'
*/
highlight.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: highlight.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::highlight
* @see app/Http/Controllers/BibleInteractionController.php:14
* @route '/bible/highlight'
*/
const highlightForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: highlight.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::highlight
* @see app/Http/Controllers/BibleInteractionController.php:14
* @route '/bible/highlight'
*/
highlightForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: highlight.url(options),
    method: 'post',
})

highlight.form = highlightForm

/**
* @see \App\Http\Controllers\BibleInteractionController::favorite
* @see app/Http/Controllers/BibleInteractionController.php:60
* @route '/bible/favorite'
*/
export const favorite = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: favorite.url(options),
    method: 'post',
})

favorite.definition = {
    methods: ["post"],
    url: '/bible/favorite',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BibleInteractionController::favorite
* @see app/Http/Controllers/BibleInteractionController.php:60
* @route '/bible/favorite'
*/
favorite.url = (options?: RouteQueryOptions) => {
    return favorite.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleInteractionController::favorite
* @see app/Http/Controllers/BibleInteractionController.php:60
* @route '/bible/favorite'
*/
favorite.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: favorite.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::favorite
* @see app/Http/Controllers/BibleInteractionController.php:60
* @route '/bible/favorite'
*/
const favoriteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: favorite.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::favorite
* @see app/Http/Controllers/BibleInteractionController.php:60
* @route '/bible/favorite'
*/
favoriteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: favorite.url(options),
    method: 'post',
})

favorite.form = favoriteForm

/**
* @see \App\Http\Controllers\BibleInteractionController::bookmark
* @see app/Http/Controllers/BibleInteractionController.php:92
* @route '/bible/bookmark'
*/
export const bookmark = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bookmark.url(options),
    method: 'post',
})

bookmark.definition = {
    methods: ["post"],
    url: '/bible/bookmark',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BibleInteractionController::bookmark
* @see app/Http/Controllers/BibleInteractionController.php:92
* @route '/bible/bookmark'
*/
bookmark.url = (options?: RouteQueryOptions) => {
    return bookmark.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleInteractionController::bookmark
* @see app/Http/Controllers/BibleInteractionController.php:92
* @route '/bible/bookmark'
*/
bookmark.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bookmark.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::bookmark
* @see app/Http/Controllers/BibleInteractionController.php:92
* @route '/bible/bookmark'
*/
const bookmarkForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bookmark.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::bookmark
* @see app/Http/Controllers/BibleInteractionController.php:92
* @route '/bible/bookmark'
*/
bookmarkForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bookmark.url(options),
    method: 'post',
})

bookmark.form = bookmarkForm

const bible = {
    search: Object.assign(search, search),
    version: Object.assign(version, version),
    chapter: Object.assign(chapter, chapter),
    highlight: Object.assign(highlight, highlight),
    favorite: Object.assign(favorite, favorite),
    bookmark: Object.assign(bookmark, bookmark),
}

export default bible