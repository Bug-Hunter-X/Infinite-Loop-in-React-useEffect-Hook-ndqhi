# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug occurs when attempting to directly update state within the `useEffect` callback without using the previous state value. This leads to an infinite render loop. The solution showcases the proper way to use the `useEffect` hook to avoid this pitfall.

## Bug Description
The `bug.js` file contains code with an infinite loop within `useEffect`.  It tries to increment the state directly without using the functional update pattern. This causes the component to re-render infinitely.

## Solution
The `bugSolution.js` file shows the corrected code.  It uses the functional update pattern for updating the state. This ensures the update is based on the previous state value and prevents the infinite loop.