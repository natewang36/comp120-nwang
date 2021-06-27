Lab #8 - COMP120: Web Programming and Engineering
The Ride-Hailing Service, Part 1
Nathan Wang
Due 6/16/2021

I believe all aspects of this lab have been completed correctly.

I completed this lab completely on my own, and I only consulted Piazza (for the API key) and the Google Maps JavaScript API Tutorial

This lab was completed in roughly 2 hours.

Optimization:
Before optimizing, there was a total of 638kB transferred over the course of 322ms

Step 1: Loading CSS first in the header
322ms -> 314ms

Step 2: Minifying HTML
314ms -> 307ms

Step 3: Minifying CSS
307ms -> 298ms

Step 4: Moving JavaScript to the bottom of <body>
Was already done before optimization

Step 5: Minifying JavaScript
298ms -> 290ms

Total reduction 322 - 290 = 32ms
