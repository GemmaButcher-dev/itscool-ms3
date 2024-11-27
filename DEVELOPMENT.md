#[Development](#development)

## Table of contents
1. [Fuzzywuzzy](#fuzzywuzzy)

## Fuzzywuzzy

After reviewing the search function it did not align well with all user stories. This is because the nature of the slang words, their definitions and origins mean that they are often not spelled as you might expect. For example a lot of newer slangs are adopted and popularised from youtubers. The key objective of the app is to help users find the words and their associated meanings. It is logical to assume that you may not know how to spell a slang word correctly in order to find it.
There is a clear need to allow some margin for error from the user when taking inputs and matching them to a document in mongoDB. 
Research suggested several options, but the best one for the solution that offers an adjustable threshold control for matching and filtering was Fuzzywuzzy.
