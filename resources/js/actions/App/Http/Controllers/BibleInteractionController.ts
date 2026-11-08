import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BibleInteractionController::toggleHighlight
* @see app/Http/Controllers/BibleInteractionController.php:14
* @route '/bible/highlight'
*/
export const toggleHighlight = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleHighlight.url(options),
    method: 'post',
})

toggleHighlight.definition = {
    methods: ["post"],
    url: '/bible/highlight',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleHighlight
* @see app/Http/Controllers/BibleInteractionController.php:14
* @route '/bible/highlight'
*/
toggleHighlight.url = (options?: RouteQueryOptions) => {
    return toggleHighlight.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleHighlight
* @see app/Http/Controllers/BibleInteractionController.php:14
* @route '/bible/highlight'
*/
toggleHighlight.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleHighlight.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleHighlight
* @see app/Http/Controllers/BibleInteractionController.php:14
* @route '/bible/highlight'
*/
const toggleHighlightForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleHighlight.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleHighlight
* @see app/Http/Controllers/BibleInteractionController.php:14
* @route '/bible/highlight'
*/
toggleHighlightForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleHighlight.url(options),
    method: 'post',
})

toggleHighlight.form = toggleHighlightForm

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleFavorite
* @see app/Http/Controllers/BibleInteractionController.php:60
* @route '/bible/favorite'
*/
export const toggleFavorite = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleFavorite.url(options),
    method: 'post',
})

toggleFavorite.definition = {
    methods: ["post"],
    url: '/bible/favorite',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleFavorite
* @see app/Http/Controllers/BibleInteractionController.php:60
* @route '/bible/favorite'
*/
toggleFavorite.url = (options?: RouteQueryOptions) => {
    return toggleFavorite.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleFavorite
* @see app/Http/Controllers/BibleInteractionController.php:60
* @route '/bible/favorite'
*/
toggleFavorite.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleFavorite.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleFavorite
* @see app/Http/Controllers/BibleInteractionController.php:60
* @route '/bible/favorite'
*/
const toggleFavoriteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFavorite.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleFavorite
* @see app/Http/Controllers/BibleInteractionController.php:60
* @route '/bible/favorite'
*/
toggleFavoriteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFavorite.url(options),
    method: 'post',
})

toggleFavorite.form = toggleFavoriteForm

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleBookmark
* @see app/Http/Controllers/BibleInteractionController.php:92
* @route '/bible/bookmark'
*/
export const toggleBookmark = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleBookmark.url(options),
    method: 'post',
})

toggleBookmark.definition = {
    methods: ["post"],
    url: '/bible/bookmark',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleBookmark
* @see app/Http/Controllers/BibleInteractionController.php:92
* @route '/bible/bookmark'
*/
toggleBookmark.url = (options?: RouteQueryOptions) => {
    return toggleBookmark.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleBookmark
* @see app/Http/Controllers/BibleInteractionController.php:92
* @route '/bible/bookmark'
*/
toggleBookmark.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleBookmark.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleBookmark
* @see app/Http/Controllers/BibleInteractionController.php:92
* @route '/bible/bookmark'
*/
const toggleBookmarkForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleBookmark.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BibleInteractionController::toggleBookmark
* @see app/Http/Controllers/BibleInteractionController.php:92
* @route '/bible/bookmark'
*/
toggleBookmarkForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleBookmark.url(options),
    method: 'post',
})

toggleBookmark.form = toggleBookmarkForm

const BibleInteractionController = { toggleHighlight, toggleFavorite, toggleBookmark }

export default BibleInteractionController