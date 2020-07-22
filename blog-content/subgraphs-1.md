---
slug: "subgraphs-1"
type: "Case Study"
title: "Structuring Customer Relationships"
subtitle: "Part 1 of 2"
---

## Background

I was engaged by a company to help make sense of their customer data in preparation for rolling out a new set of e-commerce services. These new services target the B2B market, whereas previously this company had focused predominantly on the B2C market. From their B2C operations the company had managed to amass a large amount of customer data, of which only a minority were business customers. I was asked to help this company impose a structure on their data to fit the requirements of their new services and the underlying systems.

## The Problem

The client had two main types of customer records in their system. The first type of customer record represents a user on the e-commerce platform (I'll call these accounts Users). These accounts can browse the site, add items to baskets, and place orders - all the normal, e-commerce user behaviour you'd expect. Generally, these users would pay for orders via a credit card or similar payment method via a fairly standard checkout process. However, some Users have access to another payment method - if they're linked to the second type of account (a billing account, or Biller) they can pay using the Biller's credit.

A Biller is an account in the client's financial system that represents the customer from a billing / financial sense. Importantly, the client provides these customers with credit that can be used by linked Users as a payment method for orders. Any orders paid placed by related Users will accumulate against this Biller, which will receive monthly invoices.

Each of these account types holds certain properties you'd expect to find, like an ABN, Phone number, and email address. Users also hold an (optional) Biller number that relates it to a certain Biller - the relationship between Users and Billers is many-to-one.

The client's new system required it to have a 4-level hierarchical structure for all customers. To implement a customer onto it's new platform, the client was going to have to come up with that four-level hierarchy (which, for many / most of their customers, was going to contain essentially duplicate records for several levels).

## Objective

My objective for this exercise was to provide the client with a new set of customer master data, formed from the existing records into a new, hierarchical structure consisting of at least 4 levels. I was also asked to provide the client with the ability to map the new customer records against the existing records for the purposes of historical analysis and reporting.

## Approach

As I was scoping out this problem, I already started to plan in my head the kind of approach I was going to take. I knew I was going to do the bulk of the work in Python, and that I was probably going to want to store the data in a database (rather than just in files).

### Getting data

The first challenge in tackling this problem was getting access to the raw data I knew I was going to need. As with most larger organisations, getting access to various systems can involve a number of different departments, forms, requests, etc. In this instance, I managed to get my hands on what I needed by convincing different people to export a dump of tables I needed into CSV files, and emailing them across to me. Whatever works.

The problem I faced with this approach, though, was that the systems the client was using seem to export these CSV files using a non-standard encoding. It took a bit of trial and error, and some manual find-replacing of quote- and comma-characters to get the files working. Eventually though, I managed to get the files fixed and ready for parsing.

### Parsing & cleaning the data

Before I could start creating my Users and Billers, I had to clean up a lot of the raw data. The systems used by the client were fairly old, and there wasn't much in the way of data validation on entry. I knew that I was going to have to parse these files several times, so I created a Parser class in python that can parse a raw csv file into a Pandas DataFrame, run some arbitrary cleansing functions across the data, and then save it to a csv or pickle file.

```python
import pandas as pd

class Parser:
    def __init__(self, filename: str, output_filename: str) -> None:
        self.filename: str = filename
        self.output_filename: str = output_filename
        self.clean_data: pd.DataFrame = None
        self.raw_data: pd.DataFrame = None

    def load_csv(self) -> pd.DataFrame:
        """Loads the raw data file into memory"""
        self.raw_data = pd.read_csv(self.filename, low_memory=False)

    def load_excel(self) -> pd.DataFrame:
        """Loads the raw data file into memory"""
        self.raw_data = pd.read_excel(self.filename)

    def process_data(self) -> None:
        """ Runs through all the cleaners of the class, and applies
        them to the dataframe
            Saves the cleaned data to 'self.clean_data'.
        """
        raise NotImplementedError

    def save_pickle(self) -> None:
        """Saves the processed dataframe into the pickle format based
        on the output filename"""
        self.clean_data.to_pickle(self.output_filename)

    def save_csv(self) -> None:
        """Saves the processed dataframe as a csv based on the output
        filename - only to be used for reviewing data mid-process."""
        self.clean_data.to_csv(self.output_filename.replace(".pkl", ".csv"))

    def process(self) -> None:
        self.process_data()
        self.save_pickle()
        self.save_csv()
```

We can then inherit from this generic Parser class to create parsers each for Users and Billers:

```python
class BillerDataParser(Parser):
		"""This is a parser that parses the biller data extract into a proper PKL file."""
		def __init__(
	        self, filename: str = INPUT_FILENAME, output_filename: str = OUTPUT_FILENAME
	    ) -> None:
	        super().__init__(filename=filename, output_filename=output_filename)
	        self.load_csv()

class UserDataParser(Parser):
    """This is a parser that parses the user data extract into a proper PKL file."""

    def __init__(self, filename: str, output_filename: str) -> None:
        super().__init__(filename=filename, output_filename=output_filename)
        self.load_csv()

    def process_data(self) -> None:
        df = self.raw_data.fillna("")

        # Make sure all the column names are in lowercase, and spaces replaced with underscores
        df = fix_column_names(df=df)

        # Make sure all the string columns are set to String data types,
        # and we also remove any decimals from digit strings
        df = fix_column_datatypes(df=df, col_list=self.STRING_COLUMNS)

        self.clean_data = df
```

These objects will then create the cleaned, processed data files for us to work with.

## The Database

From my initial conversations with the client, I knew that the output of this clustering work was going to be used to inform several of the client's upcoming decisions. It was very likely that I was going to be asked to generate some analysis based on the data. To do that effectively, we need a database.

The choice of tech was fairly simple - I started off by creating an SQLite database in my working directory. To do that I used the fantastic SQL Alchemy - [https://www.sqlalchemy.org/](https://www.sqlalchemy.org/) to get a simple database up and running.

[SQLAlchemy - The Database Toolkit for Python](https://www.sqlalchemy.org/)

To model our data, we need a couple tables:

- Shopper
