# MovieQ

### Contributers 
[Aditya Mishra](https://github.com/aditya01hpl)

[Yadu Krishnan](https://github.com/Yadukrishnan2002)


### Motivation
---
Movie review systems are a crucial tool for aiding 
individuals in making informed decisions about movie 
choices. The sheer volume of available content can make it 
challenging for users to identify movies that align with their 
personal preferences. Movie review systems can offer 
comprehensive information regarding plot summaries, cast 
and crew details, and critical reviews, thus enabling users to 
make more informed decisions.

## Objectives 
----
In our work we have proposed a system that generates an unbiased,short and crisp review for movies by combining the overall reviews posted by thousands of users online.This eliminates the tedious process of users going through multiple sources for getting an overall and legit review on movies they wish to watch . The system also carries out sentiment analysis on the reviews posted by users and gives an overall score on how positive or negative the response has been. 

This is an indispensable tool for both movie-goers and the film industry, providing them with valuable information, insights, and feedback that can help enhance the movie watching experience for all parties involved.

## Method Proposed
---
### Data collection and Preprocessing:

Collected and cleaned movie review data from IMDb using Python's Requests and Beautiful Soup libraries. Extracted information like titles, descriptions, reviews, and scores, and cleaned the text data for better analysis. Stored the preprocessed data in CSV/JSON formats to improve accuracy and provide meaningful insights.

### Sentiment Analysis

Performed sentiment analysis on movie reviews using NLTK's VADER model to determine polarity scores. VADER, a lexicon and rule-based tool, identifies sentiments in social media and provides positivity, negativity, and intensity scores. The application normalized sentiment scores using a specific formula for accurate assessment.

### NLP models and Algorithms used

For text summarization using NLP, we select key words and phrases from an article, focusing on sentence verbs and ranking them by significance. This method speeds up information research and provides access to hard-to-find data. The process involves tokenizing the text into smaller units, calculating sentence scores based on term frequency, and selecting the most important sentences to create a summary.

### DistilBART 

Used DistilBART, a lightweight version of the BART model from Facebook AI Research, to summarize reviews. DistilBART offers similar performance to the full-sized BART but with lower computing resource and memory requirements.

### Webpage 

Developed a React Native client for the front end, with Flask serving as the backend server. Used Python to create a webpage that integrates and displays summarization results from the server.

## Result and Analysis
---
![image](https://github.com/user-attachments/assets/bb1a4152-10d1-415c-bac9-967bf75af51b)


![image](https://github.com/user-attachments/assets/a9dd8258-a39f-4eef-bb3b-a585a44c896e)

