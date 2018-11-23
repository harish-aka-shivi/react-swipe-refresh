# react-swipe-refresh

A react package to provide the functionality of pull to refresh.

## Getting Started

Install the package using npm:

    npm install react-swipe-refresh --save

## Usage

Import the swipe refresh view component as following

    import SwipeRefreshView from 'react-swipe-refresh';

now  use the component

    <SwipeRefreshView
        disableChromeDefaultRefresh
    ></SwipeRefreshView

## Props
 * **overrideRefresh** (Default false): Default behaviour is progress bar is shown for 1.5 sec before going out off the screen. 
 * **showRefresh** (default false):  Let developer handle the showing and  hiding of the Progress bar. Must be used with overrideRefresh.
 *  **disableChromeDefaultRefresh** (default: false): ovveride the default behaviour for mobile browser of refreshing when swiped from top.
 *  **onRefresh** : Callback is called  when refresh animation is comleted.

## License

[MIT](https://github.com/harish-aka-shivi/react-swipe-refresh/blob/master/LICENSE)
