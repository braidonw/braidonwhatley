---
slug: subgraphs-2
type: Case Study
title: Finding structure in customer data
subtitle: Part 2 of 2
published: 22/07/2020
---

## The Database

From my initial conversations with the client, I knew that the output of this clustering work was going to be used to inform several of the client's upcoming decisions. It was very likely that I was going to be asked to generate some analysis based on the data. To do that effectively, we need a database.

The choice of tech was fairly simple - I started off by creating an SQLite database in my working directory. To do that I used the fantastic SQL Alchemy - [https://www.sqlalchemy.org/](https://www.sqlalchemy.org/) to get a simple database up and running.

[SQLAlchemy - The Database Toolkit for Python](https://www.sqlalchemy.org/)

To model our data, we need a couple tables:

- Shopper
