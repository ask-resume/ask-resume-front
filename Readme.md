# Ask Resume - Interview questions and answers generator for your resume

This service is an LLM service to generate resume interview questions and answers.

We used the GPT-3.5-Turbo model for this service. GPT-3.5-Turbo is OpenAI's language model which powers the popular ChatGPT. <br />
Enter your resume information and check out the Q&A that will come up in the interview! <br />

> Frontend repository: https://github.com/dev-redo/ask-resume-front

> Backend repository: https://github.com/132262B/ask-resume-backend

<br />

# Caption

### 1. Why is it failing to produce results?

If you enter your resume and generate results, a server error (HTTP status 500) may occur.

Sorry bro, This error occurs because the GPT server blocks requests when a large number of requests come in. <br />
Therefore, it has been implemented so that a re-request can be made when the issue occurs.

We will try to resolve the issue as soon as possible. Apologize for any inconvenience caused.

<br />

## Credit

This service is inspired by [DevPort](https://github.com/custardcream98/DevPort) and [gpt4-pdf-chatbot-langchain](https://github.com/mayooear/gpt4-pdf-chatbot-langchain)
