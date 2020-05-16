---
title: "Hackerrank: Journey to the Moon"
date: "2020-05-14"
description: 'hackerrank explanation'
---

My solution to [Journey to the Moon](https://www.hackerrank.com/challenges/journey-to-the-moon/problem)

<!-- <iframe width="560" height="315" src="https://www.hackerrank.com/challenges/journey-to-the-moon/problem" frameborder="0"></iframe> -->

My solution involved the application of set theory. As the problem describes, two astronauts are bounded (meaning they are not available to be represented as a pair in the final solution) if they directly appear as a pair within the provided list of astronauts or if they are linked transitively to one of the astronauts that directly appear in said pair. The final solution should reflect the total number of astronauts that are not bounded together (or in other words "free"). That solution involves a sum of the amount of resulting pairs from the Cartesian product between every two sets of bounded astronauts, resulting pairs from the Cartesian product between the set of free astronauts and every set of bounded astronauts, and the subsets of size two within the free set itself. Such a sum represents the total amount of astronauts that can be grouped together from a list of astronauts that can't be.

Bounded astronauts can be grouped together in sets, where one such set represents all the astronauts that are prohibited from appearing together as a pair of two in the final solution. You have to correctly group all transitively linked astronauts within a given set to solve the problem. Given a pair pair1: <a1, a2>, that task entails finding all pairs that include a1, and then finding all pairs that include a2.


Once the last transitively linked pair is checked against all the remaining astronauts in the list (the end of the astronaut list is reached), we know that there are no more bounded astronauts in the list of astronauts (at least for the current pair). We can then visit the next most current pair and continue checking it against the remaining astronauts in the list (provided that it hasn't already been checked against all the remaining astronauts). This situation occurs until pair1 has been checked against all the astronauts in the list. And once it has, the first set of bounded astronauts is made (there can be more than one set if there are pairs of astronauts in the list that are not transitively linked to pair1--in which case, the process is repeated with the first instance of said pairs).

You can see how this interpretation naturally encourages the use of recursion, which is what I used. And the only way to check a pair against all pairs in the list is to somehow iterate through the list of astronaut pairs, which is why I used the while loop.