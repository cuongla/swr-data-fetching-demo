# SWR-Data-Fetching Application

A demo application to practice fetching data with SWR library. SWR is a React Hooks library for data fetching. The name “SWR” is derived from stale-while-revalidate , a cache invalidation strategy popularized by HTTP RFC 5861. SWR first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again.

![Demo Images](https://imgur.com/wdrL445.png)

## General info

The project is a practice of using styled-components, wrting typescript and unit testing with React.

## Technologies

- react - version 17.0.2
- next - version 12.0.4
- react-dom - version 17.0.2
- axios - version 0.24.0
- json-server - version 0.15.0
- swr - version 1.01

## Setup

You can either use **npm** or **yarn**

1. Download the project through https://github.com/cuongla/swr-data-fetching-demo

2. Run **npm run build** or **yarn build**

3. To start the application, run **npm start**

## JSON Server

### Local

You can see dummies data located on **_db.json_**
`npm run json-server`

### Online JSON Database

Check out this link https://www.npoint.io/

## Inspiration

Building and visualizing Sudoku Game Using Pygame:
https://www.geeksforgeeks.org/building-and-visualizing-sudoku-game-using-pygame/

## Author

Created by _Cuong La(Tin)_
